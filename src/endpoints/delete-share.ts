import { z } from 'zod';
import { emptyResponseSchema } from '@/open-subsonic-types.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: 'deleteShare.view',
    summary: 'Deletes an existing share.',
});

const requestSchema = z.object({
    id: z.string(),
});

export const deleteShare = {
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
