import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import {
    albumSchema,
    artistSchema,
    baseResponseSchema,
    songSchema,
} from '@/open-subsonic-types.js';

const c = initContract();

export const search3 = c.query({
    method: 'GET',
    path: 'search3.view',
    query: z.object({
        albumCount: z.number().optional(),
        albumOffset: z.number().optional(),
        artistCount: z.number().optional(),
        artistOffset: z.number().optional(),
        musicFolderId: z.string().optional(),
        query: z.string().optional(),
        songCount: z.number().optional(),
        songOffset: z.number().optional(),
    }),
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
});
