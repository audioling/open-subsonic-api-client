import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { baseResponseSchema } from '@/open-subsonic-types.js';

const c = initContract();

const properties = {
    path: 'createShare.view',
    responses: {
        200: baseResponseSchema,
    },
    summary:
        'Creates a public URL that can be used by anyone to stream music or video from the Subsonic server.',
};

const request = z.object({
    description: z.string().optional(),
    expires: z
        .string()
        .optional()
        .describe('The time at which the share expires. Given as milliseconds since 1970.'),
    id: z
        .string()
        .array()
        .describe(
            'ID of a song, album or video to share. Use one id parameter for each entry to share.',
        ),
});

export const createShare = {
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
