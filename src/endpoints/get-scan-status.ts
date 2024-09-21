import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { baseResponseSchema } from '@/open-subsonic-types.js';

const c = initContract();

export const getScanStatus = c.query({
    method: 'GET',
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
});
