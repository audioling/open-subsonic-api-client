import { z } from 'zod';
import { emptyRequestSchema } from '@/open-subsonic-types.js';
import { licenseSchema } from '@/responses/license.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: 'getLicense.view',
    summary: 'Get details about the software license.',
});

const requestSchema = z.object({
    message: z.string().describe('The chat message.'),
});

export const getLicense = {
    ...createEndpoint.ss('SS.1.16.1', {
        request: emptyRequestSchema,
        response: z.object({
            license: licenseSchema.ss['1.16.1'],
        }),
        ...properties,
    }),
    ...createEndpoint.os('OS.1', {
        request: requestSchema,
        response: z.object({
            license: licenseSchema.ss['1.16.1'],
        }),
        ...properties,
    }),
};
