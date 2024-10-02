import { z } from 'zod';
import { directorySchema } from '@/responses/directory.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: 'getMusicDirectory.view',
    summary: 'Returns a listing of all files in a music directory.',
});

const requestSchema = z.object({
    id: z.string(),
});

export const getMusicDirectory = {
    ...createEndpoint.ss('SS.1.16.1', {
        request: requestSchema,
        response: z.object({
            directory: directorySchema.ss['1.16.1'],
        }),
        ...properties,
    }),
    ...createEndpoint.os('OS.1', {
        request: requestSchema,
        response: z.object({
            directory: directorySchema.os['1'],
        }),
        ...properties,
    }),
};
