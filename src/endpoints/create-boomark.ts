import { z } from 'zod';
import { emptyResponseSchema } from '@/open-subsonic-types.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: '/createBookmark.view',
    summary: 'Creates or updates a bookmark.',
});

const requestSchema = z.object({
    comment: z.string().optional(),
    id: z
        .string()
        .describe(
            'ID of the media file to bookmark. If a bookmark already exists for this file it will be overwritten.',
        ),
    position: z.number().describe('The position (in milliseconds) within the media file.'),
});

export const createBookmark = {
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
