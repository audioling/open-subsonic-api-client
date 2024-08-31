import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { baseResponseSchema } from '@/open-subsonic-types.js';

const c = initContract();

export const ping = c.query({
    method: 'GET',
    path: 'ping.view',
    query: z.object({
        c: z.string(),
        f: z.string(),
        p: z.string().optional(),
        s: z.string().optional(),
        t: z.string().optional(),
        u: z.string(),
        v: z.string(),
    }),
    responses: {
        200: baseResponseSchema,
    },
    summary: 'Used to test connectivity with the server.',
});
