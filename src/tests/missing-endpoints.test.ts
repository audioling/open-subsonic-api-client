import fs from 'fs/promises';
import { test } from 'bun:test';

const IMPLEMENTED_ENDPOINTS_PATH = './src/endpoints';
const OPEN_SUBSONIC_API_URL =
    'https://raw.githubusercontent.com/opensubsonic/open-subsonic-api/main/content/en/docs/opensubsonic-api.md';

function kebabCaseToCamelCase(str: string) {
    return str.replace(/-./g, (x) => x[1].toUpperCase()).replace(/^\w/, (x) => x);
}

async function getOpenSubsonicEndpoints() {
    const response = await fetch(OPEN_SUBSONIC_API_URL);
    const data = await response.text();

    // Match all the endpoints in the documentation that matches [`endpoint`]
    const regex = /\[`(\w+)`\]/g;
    const matches = data.matchAll(regex);

    const endpoints: Record<string, boolean> = {};

    for (const match of matches) {
        endpoints[match[1]] = false;
    }

    return endpoints;
}

test('OpenSubsonic endpoints implemented', async () => {
    const endpoints = await getOpenSubsonicEndpoints();

    (await fs.readdir(IMPLEMENTED_ENDPOINTS_PATH)).forEach((file) => {
        const endpointName = kebabCaseToCamelCase(file.replace('.ts', ''));
        endpoints[endpointName] = true;
    });

    let missing = 0;

    for (const endpoint of Object.keys(endpoints)) {
        if (endpoints[endpoint] === false) {
            missing += 1;
            console.log(`"${endpoint}" is not implemented`);
        }
    }

    console.log({ 'Missing endpoints': missing, 'Total endpoints': Object.keys(endpoints).length });
});
