import { z } from 'zod';
import { emptyResponseSchema } from '@/open-subsonic-types.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: '/createShare.view',
    summary:
        'Creates a public URL that can be used by anyone to stream music or video from the Subsonic server.',
});

const requestSchema = z.object({
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
