import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { baseResponseSchema } from '@/open-subsonic-types.js';

const c = initContract();

export const changePassword = c.query({
    method: 'GET',
    path: 'changePassword.view',
    query: z.object({
        password: z.string().describe('The name of the user which should change its password.'),
        username: z
            .string()
            .describe('The new password of the new user, either in clear text of hex-encoded.'),
    }),
    responses: {
        200: baseResponseSchema,
    },
    summary:
        'Changes the password of an existing user. You can only change your own password unless you have admin privileges.',
});
