import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { baseResponseSchema, genreSchema } from '@/open-subsonic-types.js';

const c = initContract();

export const getGenres = c.query({
    method: 'GET',
    path: 'getGenres.view',
    responses: {
        200: baseResponseSchema.extend({
            genres: z.object({
                genre: genreSchema.array(),
            }),
        }),
    },
    summary: 'Returns all genres.',
});
