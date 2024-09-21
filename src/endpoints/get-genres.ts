import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { baseResponseSchema, genreSchema } from '@/open-subsonic-types.js';

const c = initContract();

const properties = {
    path: 'getGenres.view',
    responses: {
        200: baseResponseSchema.extend({
            genres: z.object({
                genre: genreSchema.array(),
            }),
        }),
    },
    summary: 'Returns all genres.',
};

export const getGenres = {
    get: c.query({
        method: 'GET',
        ...properties,
    }),
    post: c.mutation({
        body: z.object({}),
        contentType: 'application/x-www-form-urlencoded',
        method: 'POST',
        ...properties,
    }),
};
