import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { albumSchema, baseResponseSchema } from '@/open-subsonic-types.js';

const c = initContract();

const properties = {
    path: 'getAlbum.view',
    responses: {
        200: baseResponseSchema.extend({
            album: albumSchema,
        }),
    },
    summary: 'Returns details for an album.',
};

const request = z.object({
    id: z.string(),
});

export const getAlbum = {
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
