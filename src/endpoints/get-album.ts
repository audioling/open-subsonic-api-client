import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { albumSchema, baseResponseSchema } from '@/open-subsonic-types.js';

const c = initContract();

export const getAlbum = c.query({
    method: 'GET',
    path: 'getAlbum.view',
    query: z.object({
        id: z.string(),
    }),
    responses: {
        200: baseResponseSchema.extend({
            album: albumSchema,
        }),
    },
    summary: 'Returns details for an album.',
});
