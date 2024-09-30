import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { baseResponseSchema, songSchema } from '@/open-subsonic-types.js';

const c = initContract();

const properties = {
    path: 'getTopSongs.view',
    responses: {
        200: baseResponseSchema.extend({
            topSongs: z.object({
                song: songSchema.array().optional(),
            }),
        }),
    },
    summary: 'Returns top songs for the given artist.',
};

const request = z.object({
    artist: z.string().describe('The name of the artist'),
    count: z.number().optional(),
});

export const getTopSongs = {
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
