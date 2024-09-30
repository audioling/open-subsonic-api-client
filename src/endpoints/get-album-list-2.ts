import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { albumSchema, baseResponseSchema } from '@/open-subsonic-types.js';

const c = initContract();

const properties = {
    path: 'getAlbumList2.view',
    responses: {
        200: baseResponseSchema.extend({
            albumList2: z.object({
                album: albumSchema.omit({ song: true }).array().optional(),
            }),
        }),
    },
    summary: 'Returns a list of random, newest, highest rated etc. albums.',
};

const request = z.object({
    fromYear: z.number().optional(),
    genre: z.string().optional(),
    musicFolderId: z.string().optional(),
    offset: z.number().optional(),
    size: z.number().optional(),
    toYear: z.number().optional(),
    type: z.enum([
        'random',
        'newest',
        'frequent',
        'recent',
        'starred',
        'alphabeticalByName',
        'alphabeticalByArtist',
        'byYear',
        'byGenre',
    ]),
});

export const getAlbumList2 = {
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
