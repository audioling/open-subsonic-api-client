import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { baseResponseSchema } from '@/open-subsonic-types.js';

const c = initContract();

export const deleteUser = c.query({
    method: 'GET',
    path: 'deleteUser.view',
    query: z.object({
        username: z.string(),
    }),
    responses: {
        200: baseResponseSchema,
    },
    summary: 'Deletes an existing user.',
});
