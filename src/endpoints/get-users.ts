import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { baseResponseSchema, userSchema } from '@/open-subsonic-types.js';

const c = initContract();

const properties = {
    path: 'getUsers.view',
    responses: {
        200: baseResponseSchema.extend({
            users: userSchema.array(),
        }),
    },
    summary:
        'Get details about all users, including which authorization roles and folder access they have. Only users with admin privileges are allowed to call this method.',
};

export const getUsers = {
    get: c.query({
        method: 'GET',
        ...properties,
    }),
    post: c.mutation({
        body: z.object({}),
        contentType: 'application/x-www-form-urlencoded',
        method: 'POST',
        ...properties,
    }),
};
