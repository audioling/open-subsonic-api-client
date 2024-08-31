import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { baseResponseSchema, songSchema } from '@/open-subsonic-types.js';

const c = initContract();

export const getRandomSongs = c.query({
    method: 'GET',
    path: 'getRandomSongs.view',
    query: z.object({
        fromYear: z.number().optional(),
        genre: z.string().optional(),
        musicFolderId: z.string().optional(),
        size: z.number().optional(),
        toYear: z.number().optional(),
    }),
    responses: {
        200: baseResponseSchema.extend({
            randomSongs: z.object({
                song: songSchema.array(),
            }),
        }),
    },
    summary: 'Returns random songs matching the given criteria.',
});
