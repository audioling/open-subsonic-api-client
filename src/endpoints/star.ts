import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { baseResponseSchema } from '@/open-subsonic-types.js';

const c = initContract();

export const star = c.query({
    method: 'GET',
    path: 'star.view',
    query: z.object({
        albumId: z.string().array().optional(),
        artistId: z.string().array().optional(),
        id: z.string().array().optional(),
    }),
    responses: {
        200: baseResponseSchema,
    },
    summary: 'Attaches a star to a song, album or artist.',
});
