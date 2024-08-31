import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { baseResponseSchema, songSchema } from '@/open-subsonic-types.js';

const c = initContract();

export const getSongsByGenre = c.query({
    method: 'GET',
    path: 'getSongsByGenre.view',
    query: z.object({
        count: z.number().optional(),
        genre: z.string(),
        musicFolderId: z.string().optional(),
        offset: z.number().optional(),
    }),
    responses: {
        200: baseResponseSchema.extend({
            songs: z
                .object({
                    song: songSchema.array(),
                })
                .optional(),
        }),
    },
    summary: 'Returns songs in a given genre.',
});
