import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { artistSchema, baseResponseSchema } from '@/open-subsonic-types.js';

const c = initContract();

const properties = {
    path: 'getArtists.view',
    responses: {
        200: baseResponseSchema.extend({
            artists: z.object({
                ignoredArticles: z.string(),
                index: z
                    .object({
                        artist: z.array(artistSchema),
                        name: z.string(),
                    })
                    .array(),
            }),
        }),
    },
    summary: 'Returns all artists.',
};

const request = z.object({
    musicFolderId: z.string().optional(),
});

export const getArtists = {
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
