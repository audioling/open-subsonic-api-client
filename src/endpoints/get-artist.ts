import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { albumSchema, artistSchema, baseResponseSchema } from '@/open-subsonic-types.js';

const c = initContract();

const properties = {
    path: 'getArtist.view',
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
};

const request = z.object({
    musicFolderId: z.string().optional(),
});

export const getArtist = {
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
