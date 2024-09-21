import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { artistSchema, baseResponseSchema, songSchema } from '@/open-subsonic-types.js';

const c = initContract();

const properties = {
    path: 'getMusicDirectory.view',
    responses: {
        200: baseResponseSchema.extend({
            directory: z.object({
                child: z.array(songSchema.or(artistSchema)),
                id: z.string(),
                name: z.string(),
            }),
        }),
    },
    summary: 'Returns a listing of all files in a music directory.',
};

const request = z.object({
    id: z.string(),
});

export const getMusicDirectory = {
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
