import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { baseResponseSchema } from '@/open-subsonic-types.js';

const c = initContract();

const properties = {
    path: 'getAlbumInfo2.view',
    responses: {
        200: baseResponseSchema.extend({
            albumInfo: z.object({
                largeImageUrl: z.string().optional(),
                mediumImageUrl: z.string().optional(),
                musicBrainzId: z.string().optional(),
                notes: z.string().optional(),
                smallImageUrl: z.string().optional(),
            }),
        }),
    },
    summary: 'Returns album info.',
};

const request = z.object({
    id: z.string(),
});

export const getAlbumInfo2 = {
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
