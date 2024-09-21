import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { baseResponseSchema } from '@/open-subsonic-types.js';

const c = initContract();

export const getLyrics = c.query({
    method: 'GET',
    path: 'getLyrics.view',
    query: z.object({
        artist: z.string().optional(),
        title: z.string().optional(),
    }),
    responses: {
        200: baseResponseSchema.extend({
            lyrics: z
                .object({
                    artist: z.string(),
                    title: z.string(),
                    value: z.string(),
                })
                .optional(),
        }),
    },
    summary: 'Searches for and returns lyrics for a given song.',
});
