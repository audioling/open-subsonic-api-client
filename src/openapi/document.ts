import { writeFileSync } from 'fs';
import { generateOpenApi } from '@ts-rest/open-api';
import YAML from 'yaml';
import { openApiContract } from '@/openapi/contract.js';
import { OpenApiTagMapper } from '@/openapi/tags.js';

const securitySchemes = {
    ApiKey: {
        description: '[OS] An API key used for authentication.',
        in: 'query',
        name: 'apiKey',
        type: 'apiKey',
    },
    ApiVersion: {
        description: 'The protocol version implemented by the client.',
        in: 'query',
        name: 'v',
        type: 'apiKey',
    },
    ClientName: {
        description: 'A unique string identifying the client application.',
        in: 'query',
        name: 'c',
        type: 'apiKey',
    },
    Password: {
        description: 'The password, either in clear text or hex-encoded with a “enc:” prefix.',
        in: 'query',
        name: 'p',
        type: 'apiKey',
    },
    ResponseFormat: {
        description:
            'Request data to be returned in this format. Supported values are “xml”, “json” (since 1.4.0) and “jsonp” (since 1.6.0). If using jsonp, specify name of javascript callback function using a callback parameter.',
        in: 'query',
        name: 'f',
        type: 'apiKey',
    },
    Salt: {
        description: 'A random string (“salt”) used as input for computing the password hash.',
        in: 'query',
        name: 's',
        type: 'apiKey',
    },
    Token: {
        description: 'The authentication token computed as md5(password + salt).',
        in: 'query',
        name: 't',
        type: 'apiKey',
    },
    Username: {
        description: 'The username.',
        in: 'query',
        name: 'u',
        type: 'apiKey',
    },
};

const security = [
    {
        ApiKey: [],
        ApiVersion: [],
        ClientName: [],
        Password: [],
        ResponseFormat: [],
        Salt: [],
        Token: [],
        Username: [],
    },
];

const openApiDocument = generateOpenApi(
    openApiContract,
    {
        components: {
            securitySchemes,
        },
        info: {
            title: 'OpenSubsonic API',
            version: '1',
        },
    },
    {
        operationMapper(operation, appRoute) {
            return {
                ...operation,
                security,
                tags: [OpenApiTagMapper[appRoute.path]],
            };
        },
        setOperationId: true,
    },
);

function writeOpenApi3Schema() {
    writeFileSync('openapi3.schema.json', JSON.stringify(openApiDocument, null, 2), 'utf-8');
    writeFileSync('openapi3.schema.yaml', YAML.stringify(openApiDocument), 'utf-8');
}

writeOpenApi3Schema();
