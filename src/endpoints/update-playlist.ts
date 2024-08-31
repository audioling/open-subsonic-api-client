import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { baseResponseSchema } from '@/open-subsonic-types.js';

const c = initContract();

export const updatePlaylist = c.query({
    method: 'GET',
    path: 'updatePlaylist.view',
    query: z.object({
        comment: z.string().optional(),
        name: z.string().optional(),
        playlistId: z.string(),
        public: z.boolean().optional(),
        songIdToAdd: z.string().array().optional(),
        songIdToRemove: z.string().array().optional(),
    }),
    responses: {
        200: baseResponseSchema,
    },
    summary: 'Updates a playlist. Only the owner of a playlist is allowed to update it.',
});
