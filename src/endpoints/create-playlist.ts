import { z } from 'zod';
import { playlistWithSongsSchema } from '@/responses/playlist-with-songs.js';
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
        response: z.object({
            playlist: playlistWithSongsSchema.ss['1.16.1'],
        }),
        ...properties,
    }),
    ...createEndpoint.os('OS.1', {
        request: requestSchema,
        response: z.object({
            playlist: playlistWithSongsSchema.os['1'],
        }),
        ...properties,
    }),
};
