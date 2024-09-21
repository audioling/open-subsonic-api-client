import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { baseResponseSchema } from '@/open-subsonic-types.js';

const c = initContract();

export const startScan = c.query({
    method: 'GET',
    path: 'startScan.view',
    responses: {
        200: baseResponseSchema.extend({
            scanStatus: z.object({
                count: z.number(),
                scanning: z.boolean(),
            }),
        }),
    },
    summary: 'Initiates a rescan of the media libraries.',
});
