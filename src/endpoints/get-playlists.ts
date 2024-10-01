import { z } from 'zod';
import { playlistsSchema } from '@/responses/playlists.js';
import { createEndpoint } from '@/utils.js';

const request = z.object({
    username: z.string().optional(),
});

export const getPlaylists = createEndpoint(
    {
        path: 'getPlaylists.view',
        request: { default: request },
        response: {
            default: z.object({
                playlists: playlistsSchema.ss['1.16.1'],
            }),
        },
    },
    {
        os: { '1': true },
        ss: { '1.16.1': true },
    },
);
