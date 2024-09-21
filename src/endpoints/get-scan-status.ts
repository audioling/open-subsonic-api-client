import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { baseResponseSchema } from '@/open-subsonic-types.js';

const c = initContract();

const properties = {
    path: 'getScanStatus.view',
    responses: {
        200: baseResponseSchema.extend({
            scanStatus: z.object({
                count: z.number(),
                scanning: z.boolean(),
            }),
        }),
    },
    summary: 'Returns the current status for media library scanning.',
};

export const getScanStatus = {
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
