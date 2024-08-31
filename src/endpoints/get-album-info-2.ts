import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { baseResponseSchema } from '@/open-subsonic-types.js';

const c = initContract();

export const getAlbumInfo2 = c.query({
    method: 'GET',
    path: 'getAlbumInfo2.view',
    query: z.object({
        id: z.string(),
    }),
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
});
