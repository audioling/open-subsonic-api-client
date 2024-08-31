import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { albumSchema, baseResponseSchema } from '@/open-subsonic-types.js';

const c = initContract();

export const getAlbumList2 = c.query({
    method: 'GET',
    path: 'getAlbumList2.view',
    query: z.object({
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
    }),
    responses: {
        200: baseResponseSchema.extend({
            albumList2: z.object({
                album: albumSchema.omit({ song: true }).array(),
            }),
        }),
    },
    summary: 'Returns a list of random, newest, highest rated etc. albums.',
});
