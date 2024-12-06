import { z } from 'zod';
import { emptyResponseSchema } from '@/open-subsonic-types.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: '/scrobble.view',
    summary: 'Registers the local playback of one or more media files.',
});

const requestSchema = z.object({
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
    ...createEndpoint.ss('SS.1.16.1', {
        request: requestSchema,
        response: emptyResponseSchema,
        ...properties,
    }),
    ...createEndpoint.os('OS.1', {
        request: requestSchema,
        response: emptyResponseSchema,
        ...properties,
    }),
};
