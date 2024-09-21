import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { albumSchema, artistSchema, baseResponseSchema } from '@/open-subsonic-types.js';

const c = initContract();

export const getArtist = c.query({
    method: 'GET',
    path: 'getArtist.view',
    query: z.object({
        musicFolderId: z.string().optional(),
    }),
    responses: {
        200: baseResponseSchema.extend({
            artist: z.object({
                artist: artistSchema.extend({
                    album: z.array(albumSchema),
                }),
            }),
        }),
    },
    summary:
        'Returns details for an artist, including a list of albums. This method organizes music according to ID3 tags.',
});
