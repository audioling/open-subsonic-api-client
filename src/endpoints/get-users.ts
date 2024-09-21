import { initContract } from '@ts-rest/core';
import { baseResponseSchema, userSchema } from '@/open-subsonic-types.js';

const c = initContract();

export const getUsers = c.query({
    method: 'GET',
    path: 'getUsers.view',
    responses: {
        200: baseResponseSchema.extend({
            users: userSchema.array(),
        }),
    },
    summary:
        'Get details about all users, including which authorization roles and folder access they have. Only users with admin privileges are allowed to call this method.',
});
