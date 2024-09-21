import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { baseResponseSchema, userSchema } from '@/open-subsonic-types.js';

const c = initContract();

const properties = {
    path: 'getUser.view',
    responses: {
        200: baseResponseSchema.extend({
            user: userSchema,
        }),
    },
    summary:
        'Get details about a given user, including which authorization roles and folder access it has. Can be used to enable/disable certain features in the client, such as jukebox control.',
};

export const getUser = {
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
