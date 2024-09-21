import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { baseResponseSchema } from '@/open-subsonic-types.js';

const c = initContract();

const properties = {
    path: 'getLyrics.view',
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
};

const request = z.object({
    artist: z.string().optional(),
    title: z.string().optional(),
});

export const getLyrics = {
    get: c.query({
        method: 'GET',
        query: request,
        ...properties,
    }),
    post: c.mutation({
        body: request,
        contentType: 'application/x-www-form-urlencoded',
        method: 'POST',
        ...properties,
    }),
};
