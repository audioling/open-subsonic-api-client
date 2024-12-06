import { z } from 'zod';
import { playlistsSchema } from '@/responses/playlists.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: '/getPlaylists.view',
    summary: 'Returns all playlists.',
});

const requestSchema = z.object({
    username: z.string().optional(),
});

export const getPlaylists = {
    ...createEndpoint.ss('SS.1.16.1', {
        request: requestSchema,
        response: z.object({
            playlists: playlistsSchema.ss['1.16.1'],
        }),
        ...properties,
    }),
    ...createEndpoint.os('OS.1', {
        request: requestSchema,
        response: z.object({
            playlists: playlistsSchema.ss['1.16.1'],
        }),
        ...properties,
    }),
};
