import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { baseResponseSchema } from '@/open-subsonic-types.js';

const c = initContract();

export const deletePlaylist = c.query({
    method: 'GET',
    path: 'deletePlaylist.view',
    query: z.object({
        id: z.string(),
    }),
    responses: {
        200: baseResponseSchema,
    },
    summary: 'Deletes a saved playlist.',
});
