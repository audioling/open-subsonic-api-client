import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { baseResponseSchema } from '@/open-subsonic-types.js';

const c = initContract();

const properties = {
    path: 'scrobble.view',
    responses: {
        200: baseResponseSchema,
    },
    summary: 'Registers the local playback of one or more media files.',
};

const request = z.object({
    id: z.string().or(z.string().array()),
    submission: z
        .boolean()
        .optional()
        .describe('True for playback completed, false for in-progress'),
    time: z
        .number()
        .or(z.number().array())
        .optional()
        .describe('The time (in milliseconds since 1 Jan 1970) at which the song was listened to.'),
});

export const scrobble = {
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
