import { z } from 'zod';
import { playlistWithSongsSchema } from '@/responses/playlist-with-songs.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: '/getPlaylist.view',
    summary: 'Returns a listing of files in a saved playlist.',
});

const requestSchema = z.object({
    id: z.string(),
});

export const getPlaylist = {
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
