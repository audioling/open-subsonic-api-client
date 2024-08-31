import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { baseResponseSchema, songSchema } from '@/open-subsonic-types.js';

const c = initContract();

export const getSimilarSongs2 = c.query({
    method: 'GET',
    path: 'getSimilarSongs2.view',
    query: z.object({
        count: z.number().optional(),
        id: z.string(),
    }),
    responses: {
        200: baseResponseSchema.extend({
            similarSongs: z
                .object({
                    song: songSchema.array(),
                })
                .optional(),
        }),
    },
    summary: 'Returns a random collection of songs from the given artist and similar artists.',
});
