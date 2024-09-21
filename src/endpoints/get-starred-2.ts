import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import {
    albumSchema,
    artistSchema,
    baseResponseSchema,
    songSchema,
} from '@/open-subsonic-types.js';

const c = initContract();

const properties = {
    path: 'getStarred2.view',
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
};

const request = z.object({
    musicFolderId: z.string().optional(),
});

export const getStarred2 = {
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
