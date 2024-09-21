import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { baseResponseSchema } from '@/open-subsonic-types.js';

const c = initContract();

const properties = {
    path: 'ping.view',
    responses: {
        200: baseResponseSchema,
    },
    summary: 'Used to test connectivity with the server.',
};

const request = z.object({
    c: z.string(),
    f: z.string(),
    p: z.string().optional(),
    s: z.string().optional(),
    t: z.string().optional(),
    u: z.string(),
    v: z.string(),
});

export const ping = {
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
