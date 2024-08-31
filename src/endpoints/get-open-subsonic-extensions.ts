import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { baseResponseSchema, OpenSubsonicExtensions } from '@/open-subsonic-types.js';

const c = initContract();

export const getOpenSubsonicExtensions = c.query({
    method: 'GET',
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
});
