import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { baseResponseSchema, OpenSubsonicExtensions } from '@/open-subsonic-types.js';

const c = initContract();

const properties = {
    path: 'getOpenSubsonicExtensions.view',
    responses: {
        200: baseResponseSchema.extend({
            openSubsonicExtensions: z
                .object({
                    name: z.nativeEnum(OpenSubsonicExtensions),
                    versions: z.number().array(),
                })
                .array()
                .optional(),
        }),
    },
    summary: 'List the OpenSubsonic extensions supported by this server.',
};

export const getOpenSubsonicExtensions = {
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
