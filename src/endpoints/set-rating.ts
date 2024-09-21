import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { baseResponseSchema } from '@/open-subsonic-types.js';

const c = initContract();

const properties = {
    path: 'setRating.view',
    responses: {
        200: baseResponseSchema,
    },
    summary: 'Sets the rating for an item.',
};

const request = z.object({
    id: z.string(),
    rating: z.number().int().min(0).max(5).describe('The rating from 0 to 5'),
});

export const setRating = {
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
