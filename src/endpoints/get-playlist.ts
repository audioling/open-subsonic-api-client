import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { baseResponseSchema, playlistSchema, songSchema } from '@/open-subsonic-types.js';

const c = initContract();

export const getPlaylist = c.query({
    method: 'GET',
    path: 'getPlaylist.view',
    query: z.object({
        id: z.string(),
    }),
    responses: {
        200: baseResponseSchema.extend({
            playlist: playlistSchema.extend({
                entry: z.array(songSchema),
            }),
        }),
    },
    summary: 'Returns a listing of files in a saved playlist.',
});
