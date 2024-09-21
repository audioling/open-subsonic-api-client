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
    path: 'search3.view',
    responses: {
        200: baseResponseSchema.extend({
            searchResult3: z.object({
                album: albumSchema.array().optional(),
                artist: artistSchema.array().optional(),
                song: songSchema.array().optional(),
            }),
        }),
    },
    summary:
        'Returns albums, artists and songs matching the given search criteria. Supports paging through the result.',
};

const request = z.object({
    albumCount: z.number().optional(),
    albumOffset: z.number().optional(),
    artistCount: z.number().optional(),
    artistOffset: z.number().optional(),
    musicFolderId: z.string().optional(),
    query: z.string().optional(),
    songCount: z.number().optional(),
    songOffset: z.number().optional(),
});

export const search3 = {
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
