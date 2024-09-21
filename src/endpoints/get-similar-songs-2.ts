import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { baseResponseSchema, songSchema } from '@/open-subsonic-types.js';

const c = initContract();

const properties = {
    path: 'getSimilarSongs2.view',
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
};

const request = z.object({
    count: z.number().optional(),
    id: z.string(),
});

export const getSimilarSongs2 = {
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
