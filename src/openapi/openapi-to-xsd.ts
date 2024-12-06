/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from 'fs';

interface OpenAPISchema {
    openapi: string;
    paths: {
        [key: string]: {
            get?: {
                parameters?: Array<{
                    description?: string;
                    name: string;
                    required?: boolean;
                    schema: {
                        enum?: string[];
                        items?: any;
                        type: string;
                    };
                }>;
                responses: {
                    [key: string]: {
                        content?: {
                            'application/json': {
                                schema: any;
                            };
                        };
                    };
                };
                summary?: string;
            };
        };
    };
}

function convertOpenAPIToXSD(openApiSchema: OpenAPISchema): string {
    let xsd = `<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema"
           xmlns:sub="http://subsonic.org/restapi"
           targetNamespace="http://subsonic.org/restapi"
           elementFormDefault="qualified">\n\n`;

    // Add base Response type
    xsd += `  <!-- Base response type -->
  <xs:complexType name="Response">
    <xs:sequence>
      <xs:element name="status" type="xs:string" minOccurs="1"/>
      <xs:element name="version" type="xs:string" minOccurs="1"/>
      <xs:element name="type" type="xs:string" minOccurs="0"/>
      <xs:element name="serverVersion" type="xs:string" minOccurs="0"/>
      <xs:element name="openSubsonic" type="xs:boolean" minOccurs="0"/>
    </xs:sequence>
  </xs:complexType>\n\n`;

    // Process each path
    for (const [pathName, pathData] of Object.entries(openApiSchema.paths)) {
        const endpoint = pathName.replace('.view', '');
        const getData = pathData.get;

        if (getData) {
            xsd += `  <!-- ${getData.summary || endpoint} -->\n`;
            xsd += `  <xs:element name="${endpoint}">\n`;
            xsd += `    <xs:complexType>\n`;

            // Add parameters as sequence
            if (getData.parameters && getData.parameters.length > 0) {
                xsd += `      <xs:sequence>\n`;

                for (const param of getData.parameters) {
                    const paramType = convertType(param.schema);
                    const required = param.required ? '' : ' minOccurs="0"';
                    const description = param.description
                        ? `\n        <!-- ${param.description} -->`
                        : '';

                    if (param.schema.type === 'array') {
                        xsd += `        ${description}\n`;
                        xsd += `        <xs:element name="${param.name}"${required} maxOccurs="unbounded">\n`;
                        xsd += `          <xs:complexType>\n`;
                        xsd += `            <xs:sequence>\n`;
                        xsd += `              <xs:element name="value" type="${convertType(param.schema.items)}"/>\n`;
                        xsd += `            </xs:sequence>\n`;
                        xsd += `          </xs:complexType>\n`;
                        xsd += `        </xs:element>\n`;
                    } else {
                        xsd += `        ${description}\n`;
                        xsd += `        <xs:element name="${param.name}" type="${paramType}"${required}/>\n`;
                    }
                }

                xsd += `      </xs:sequence>\n`;
            }

            // Process response schema if it exists
            const responseSchema =
                getData.responses?.['200']?.content?.['application/json']?.schema;
            if (responseSchema && responseSchema.type === 'object') {
                // Skip if it's just the base response type
                const hasOnlyBaseProperties = Object.keys(responseSchema.properties || {}).every(
                    (prop) =>
                        ['status', 'version', 'type', 'serverVersion', 'openSubsonic'].includes(
                            prop,
                        ),
                );

                if (!hasOnlyBaseProperties) {
                    xsd += processResponseSchema(responseSchema);
                }
            }

            xsd += `    </xs:complexType>\n`;
            xsd += `  </xs:element>\n\n`;
        }
    }

    xsd += `</xs:schema>`;
    return xsd;
}

function convertType(schema: { items?: any; type: string }): string {
    switch (schema.type) {
        case 'string':
            return 'xs:string';
        case 'number':
            return 'xs:decimal';
        case 'integer':
            return 'xs:integer';
        case 'boolean':
            return 'xs:boolean';
        case 'array':
            return convertType(schema.items);
        default:
            return 'xs:string';
    }
}

function processResponseSchema(schema: any): string {
    let xsd = '';

    if (schema.type === 'object' && schema.properties) {
        for (const [propName, propSchema] of Object.entries<any>(schema.properties)) {
            // Skip base response properties
            if (['status', 'version', 'type', 'serverVersion', 'openSubsonic'].includes(propName)) {
                continue;
            }

            const required = schema.required?.includes(propName) ? '' : ' minOccurs="0"';

            if (propSchema.type === 'object') {
                // Define complex type
                xsd += `      <xs:complexType name="${propName}Type">\n`;
                xsd += `        <xs:sequence>\n`;
                xsd += processResponseSchema(propSchema);
                xsd += `        </xs:sequence>\n`;
                xsd += `      </xs:complexType>\n`;

                // Reference the type
                xsd += `      <xs:element name="${propName}" type="${propName}Type"${required}/>\n`;
            } else if (propSchema.type === 'array') {
                xsd += `      <xs:element name="${propName}"${required}>\n`;
                xsd += `        <xs:complexType>\n`;
                xsd += `          <xs:sequence>\n`;
                xsd += `            <xs:element name="item" type="${convertType(propSchema.items)}" maxOccurs="unbounded"/>\n`;
                xsd += `          </xs:sequence>\n`;
                xsd += `        </xs:complexType>\n`;
                xsd += `      </xs:element>\n`;
            } else {
                xsd += `      <xs:element name="${propName}" type="${convertType(propSchema)}"${required}/>\n`;
            }
        }
    }

    return xsd;
}

const openApiJson = JSON.parse(fs.readFileSync('openapi3.schema.json', 'utf8'));

// Convert to XSD
const xsdOutput = convertOpenAPIToXSD(openApiJson);

// Save the output
fs.writeFileSync('xml.schema.xsd', xsdOutput);
