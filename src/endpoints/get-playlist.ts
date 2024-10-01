import { z } from 'zod';
import { playlistWithSongsSchema } from '@/responses/playlist-with-songs.js';
import { createEndpoint } from '@/utils.js';

const request = z.object({
    id: z.string(),
});

export const getPlaylist = createEndpoint(
    {
        path: 'getPlaylist.view',
        request: { default: request },
        response: {
            default: z.object({
                playlist: playlistWithSongsSchema.ss['1.16.1'],
            }),
            os: {
                '1': z.object({
                    playlist: playlistWithSongsSchema.os['1'],
                }),
            },
        },
        summary: 'Returns a listing of files in a saved playlist.',
    },
    {
        os: { '1': true },
        ss: { '1.16.1': true },
    },
);
