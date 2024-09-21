import { initContract } from '@ts-rest/core';
import { baseResponseSchema, userSchema } from '@/open-subsonic-types.js';

const c = initContract();

export const getUser = c.query({
    method: 'GET',
    path: 'getUser.view',
    responses: {
        200: baseResponseSchema.extend({
            user: userSchema,
        }),
    },
    summary:
        'Get details about a given user, including which authorization roles and folder access it has. Can be used to enable/disable certain features in the client, such as jukebox control.',
});
