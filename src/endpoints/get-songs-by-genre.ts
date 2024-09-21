import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { baseResponseSchema, songSchema } from '@/open-subsonic-types.js';

const c = initContract();

const properties = {
    path: 'getSongsByGenre.view',
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
};

const request = z.object({
    count: z.number().optional(),
    genre: z.string(),
    musicFolderId: z.string().optional(),
    offset: z.number().optional(),
});

export const getSongsByGenre = {
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
