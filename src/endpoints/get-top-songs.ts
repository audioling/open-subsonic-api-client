import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { baseResponseSchema, songSchema } from '@/open-subsonic-types.js';

const c = initContract();

export const getTopSongs = c.query({
    method: 'GET',
    path: 'getTopSongs.view',
    query: z.object({
        artist: z.string().describe('The name of the artist'),
        count: z.number().optional(),
    }),
    responses: {
        200: baseResponseSchema.extend({
            topSongs: z.object({
                song: songSchema.array(),
            }),
        }),
    },
    summary: 'Returns top songs for the given artist.',
});
