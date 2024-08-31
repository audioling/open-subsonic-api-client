import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { baseResponseSchema } from '@/open-subsonic-types.js';

const c = initContract();

export const createPlaylist = c.query({
    method: 'GET',
    path: 'createPlaylist.view',
    query: z.object({
        name: z.string().optional(),
        playlistId: z.string().optional(),
        songId: z.string().array(),
    }),
    responses: {
        200: baseResponseSchema,
    },
    summary: 'Creates (or updates) a playlist.',
});
