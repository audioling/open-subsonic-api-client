import { z } from 'zod';
import { emptyResponseSchema } from '@/open-subsonic-types.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: 'updateShare.view',
    summary: 'Updates the description and/or expiration date for an existing share.',
});

export const requestSchema = z.object({
    description: z.string().optional(),
    expires: z
        .string()
        .optional()
        .describe('The time at which the share expires. Given as milliseconds since 1970.'),
    id: z.string().describe('ID of the share to update.'),
});

export const updateShare = {
    ...createEndpoint.ss('SS.1.16.1', {
        request: requestSchema,
        response: emptyResponseSchema,
        ...properties,
    }),
    ...createEndpoint.os('OS.1', {
        request: requestSchema,
        response: emptyResponseSchema,
        ...properties,
    }),
};
