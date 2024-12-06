import { z } from 'zod';
import { starred2Schema } from '@/responses/starred-2.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: '/getStarred2.view',
    summary:
        'Returns starred songs, albums and artists. Similar to getStarred, but organizes music according to ID3 tags.',
});

const requestSchema = z.object({
    musicFolderId: z.string().optional(),
});

export const getStarred2 = {
    ...createEndpoint.ss('SS.1.16.1', {
        request: requestSchema,
        response: z.object({
            starred2: starred2Schema.ss['1.16.1'],
        }),
        ...properties,
    }),
    ...createEndpoint.os('OS.1', {
        request: requestSchema,
        response: z.object({
            starred2: starred2Schema.os['1'],
        }),
        ...properties,
    }),
};
