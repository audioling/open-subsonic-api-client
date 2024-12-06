import { z } from 'zod';
import { emptyResponseSchema } from '@/open-subsonic-types.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: 'deleteBookmark.view',
    summary: 'Deletes a bookmark.',
});

const requestSchema = z.object({
    id: z
        .string()
        .describe(
            'ID of the media file for which to delete the bookmark. Other users’ bookmarks are not affected.',
        ),
});

export const deleteBookmark = {
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
