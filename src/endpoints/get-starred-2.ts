import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import {
    albumSchema,
    artistSchema,
    baseResponseSchema,
    songSchema,
} from '@/open-subsonic-types.js';

const c = initContract();

export const getStarred2 = c.query({
    method: 'GET',
    path: 'getStarred2.view',
    query: z.object({
        musicFolderId: z.string().optional(),
    }),
    responses: {
        200: baseResponseSchema.extend({
            starred2: z
                .object({
                    album: albumSchema.array(),
                    artist: artistSchema.array(),
                    song: songSchema.array(),
                })
                .optional(),
        }),
    },
    summary: 'Returns starred songs, albums and artists.',
});
