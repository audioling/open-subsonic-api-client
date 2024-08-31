import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { artistSchema, baseResponseSchema } from '@/open-subsonic-types.js';

const c = initContract();

export const getIndexes = c.query({
    method: 'GET',
    path: 'getIndexes.view',
    query: z.object({
        ifModifiedSince: z.string().optional(),
        musicFolderId: z
            .string()
            .optional()
            .describe(
                'If specified, only return a result if the artist collection has changed since the given time (in milliseconds since 1 Jan 1970).',
            ),
    }),
    responses: {
        200: baseResponseSchema.extend({
            indexes: z.object({
                ignoredArticles: z.string(),
                index: z.object({
                    artist: artistSchema.array(),
                    name: z.string(),
                }),
            }),
        }),
    },
    summary: 'Returns an indexed structure of all artists.',
});
