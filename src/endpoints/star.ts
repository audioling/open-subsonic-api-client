import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { baseResponseSchema } from '@/open-subsonic-types.js';

const c = initContract();

const properties = {
    path: 'star.view',
    responses: {
        200: baseResponseSchema,
    },
    summary: 'Attaches a star to a song, album or artist.',
};

const request = z.object({
    albumId: z.string().array().optional(),
    artistId: z.string().array().optional(),
    id: z.string().array().optional(),
});

export const star = {
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
