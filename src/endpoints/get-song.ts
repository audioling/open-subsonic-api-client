import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { baseResponseSchema, songSchema } from '@/open-subsonic-types.js';

const c = initContract();

const properties = {
    path: 'getSong.view',
    responses: {
        200: baseResponseSchema.extend({
            song: songSchema,
        }),
    },
    summary: 'Returns details for a song.',
};

const request = z.object({
    id: z.string(),
});

export const getSong = {
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
