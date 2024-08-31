import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { baseResponseSchema, playlistSchema } from '@/open-subsonic-types.js';

const c = initContract();

export const getPlaylists = c.query({
    method: 'GET',
    path: 'getPlaylists.view',
    query: z.object({
        username: z.string().optional(),
    }),
    responses: {
        200: baseResponseSchema.extend({
            playlists: z.object({
                playlist: z.array(playlistSchema),
            }),
        }),
    },
    summary: 'Returns all playlists a user is allowed to play.',
});
