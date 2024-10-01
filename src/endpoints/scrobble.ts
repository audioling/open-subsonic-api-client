import { z } from 'zod';
import { emptyResponseSchema } from '@/open-subsonic-types.js';
import { createEndpoint } from '@/utils.js';

export const scrobble = createEndpoint(
    {
        path: 'scrobble.view',
        request: {
            default: z.object({
                id: z.string().or(z.string().array()),
                submission: z
                    .boolean()
                    .optional()
                    .describe('True for playback completed, false for in-progress'),
                time: z
                    .number()
                    .or(z.number().array())
                    .optional()
                    .describe(
                        'The time (in milliseconds since 1 Jan 1970) at which the song was listened to.',
                    ),
            }),
        },
        response: { default: emptyResponseSchema },
        summary: 'Registers the local playback of one or more media files.',
    },
    {
        os: { '1': true },
        ss: { '1.16.1': true },
    },
);
