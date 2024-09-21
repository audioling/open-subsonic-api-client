import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { baseResponseSchema, songSchema } from '@/open-subsonic-types.js';

const c = initContract();

const properties = {
    path: 'getRandomSongs.view',
    responses: {
        200: baseResponseSchema.extend({
            randomSongs: z.object({
                song: songSchema.array(),
            }),
        }),
    },
    summary: 'Returns random songs matching the given criteria.',
};

const request = z.object({
    fromYear: z.number().optional(),
    genre: z.string().optional(),
    musicFolderId: z.string().optional(),
    size: z.number().optional(),
    toYear: z.number().optional(),
});

export const getRandomSongs = {
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
