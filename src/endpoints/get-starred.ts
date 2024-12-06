import { z } from 'zod';
import { starredSchema } from '@/responses/starred.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: 'getStarred.view',
    summary: 'Returns starred songs, albums and artists.',
});

const requestSchema = z.object({
    musicFolderId: z.string().optional(),
});

export const getStarred = {
    ...createEndpoint.ss('SS.1.16.1', {
        request: requestSchema,
        response: z.object({
            starred: starredSchema.ss['1.16.1'],
        }),
        ...properties,
    }),
    ...createEndpoint.os('OS.1', {
        request: requestSchema,
        response: z.object({
            starred: starredSchema.os['1'],
        }),
        ...properties,
    }),
};
