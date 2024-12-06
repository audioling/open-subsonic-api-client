import { z } from 'zod';
import { emptyResponseSchema } from '@/open-subsonic-types.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: '/createPlaylist.view',
    summary: 'Creates (or updates) a playlist.',
});

const requestSchema = z.object({
    name: z.string().optional(),
    playlistId: z.string().optional(),
    songId: z.string().array(),
});

export const createPlaylist = {
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
