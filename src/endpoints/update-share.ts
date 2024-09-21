import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { baseResponseSchema } from '@/open-subsonic-types.js';

const c = initContract();

export const updateShare = c.query({
    method: 'GET',
    path: 'updateShare.view',
    query: z.object({
        description: z.string().optional(),
        expires: z
            .string()
            .optional()
            .describe('The time at which the share expires. Given as milliseconds since 1970.'),
        id: z.string().describe('ID of the share to update.'),
    }),
    responses: {
        200: baseResponseSchema,
    },
    summary: 'Updates the description and/or expiration date for an existing share.',
});
