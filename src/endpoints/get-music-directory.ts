import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { artistSchema, baseResponseSchema, songSchema } from '@/open-subsonic-types.js';

const c = initContract();

export const getMusicDirectory = c.query({
    method: 'GET',
    path: 'getMusicDirectory.view',
    query: z.object({
        id: z.string(),
    }),
    responses: {
        200: baseResponseSchema.extend({
            directory: z.object({
                child: z.array(songSchema.or(artistSchema)),
                id: z.string(),
                name: z.string(),
            }),
        }),
    },
    summary: 'Returns a listing of all files in a music directory.',
});
