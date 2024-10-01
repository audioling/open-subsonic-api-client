import { z } from 'zod';
import { emptyResponseSchema } from '@/open-subsonic-types.js';
import { createEndpoint } from '@/utils.js';

export const createShare = createEndpoint(
    {
        path: 'createShare.view',
        request: {
            default: z.object({
                description: z.string().optional(),
                expires: z
                    .string()
                    .optional()
                    .describe(
                        'The time at which the share expires. Given as milliseconds since 1970.',
                    ),
                id: z
                    .string()
                    .array()
                    .describe(
                        'ID of a song, album or video to share. Use one id parameter for each entry to share.',
                    ),
            }),
        },
        response: { default: emptyResponseSchema },
        summary:
            'Creates a public URL that can be used by anyone to stream music or video from the Subsonic server.',
    },
    {
        os: { '1': true },
        ss: { '1.16.1': true },
    },
);
