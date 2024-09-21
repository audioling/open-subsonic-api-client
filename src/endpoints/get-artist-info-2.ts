import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { baseResponseSchema } from '@/open-subsonic-types.js';

const c = initContract();

const properties = {
    path: 'getArtistInfo2.view',
    responses: {
        200: baseResponseSchema.extend({
            artistInfo: z.object({
                biography: z.string().optional(),
                largeImageUrl: z.string().optional(),
                lastFmUrl: z.string().optional(),
                mediumImageUrl: z.string().optional(),
                musicBrainzId: z.string().optional(),
                similarArtist: z.array(
                    z.object({
                        albumCount: z.string(),
                        artistImageUrl: z.string().optional(),
                        coverArt: z.string().optional(),
                        id: z.string(),
                        name: z.string(),
                    }),
                ),
                smallImageUrl: z.string().optional(),
            }),
        }),
    },
    summary: 'Returns artist info.',
};

const request = z.object({
    count: z.number().optional(),
    id: z.string(),
    includeNotPresent: z.boolean().optional(),
});

export const getArtistInfo2 = {
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
