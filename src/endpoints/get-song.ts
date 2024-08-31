import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { baseResponseSchema, songSchema } from '@/open-subsonic-types.js';

const c = initContract();

export const getSong = c.query({
    method: 'GET',
    path: 'getSong.view',
    query: z.object({
        id: z.string(),
    }),
    responses: {
        200: baseResponseSchema.extend({
            song: songSchema,
        }),
    },
    summary: 'Returns details for a song.',
});
