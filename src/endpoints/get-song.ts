import { z } from 'zod';
import { childSchema } from '@/responses/child.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: '/getSong.view',
    summary: 'Returns details for a song.',
});

const requestSchema = z.object({
    id: z.string(),
});

export const getSong = {
    ...createEndpoint.ss('SS.1.16.1', {
        request: requestSchema,
        response: z.object({
            song: childSchema.ss['1.16.1'],
        }),
        ...properties,
    }),
    ...createEndpoint.os('OS.1', {
        request: requestSchema,
        response: z.object({
            song: childSchema.os['1'],
        }),
        ...properties,
    }),
};
