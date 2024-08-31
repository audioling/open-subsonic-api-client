import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { baseResponseSchema } from '@/open-subsonic-types.js';

const c = initContract();

export const setRating = c.query({
    method: 'GET',
    path: 'setRating.view',
    query: z.object({
        id: z.string(),
        rating: z.number().int().min(0).max(5).describe('The rating from 0 to 5'),
    }),
    responses: {
        200: baseResponseSchema,
    },
    summary: 'Sets the rating for an item.',
});
