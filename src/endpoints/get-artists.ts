import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { artistSchema, baseResponseSchema } from '@/open-subsonic-types.js';

const c = initContract();

export const getArtists = c.query({
    method: 'GET',
    path: 'getArtists.view',
    query: z.object({
        musicFolderId: z.string().optional(),
    }),
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
});
