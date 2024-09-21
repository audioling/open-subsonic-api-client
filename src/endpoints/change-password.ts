import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { baseResponseSchema } from '@/open-subsonic-types.js';

const c = initContract();

const properties = {
    path: 'changePassword.view',
    responses: {
        200: baseResponseSchema,
    },
    summary:
        'Changes the password of an existing user. You can only change your own password unless you have admin privileges.',
};

const request = z.object({
    password: z.string().describe('The name of the user which should change its password.'),
    username: z
        .string()
        .describe('The new password of the new user, either in clear text of hex-encoded.'),
});

export const changePassword = {
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
