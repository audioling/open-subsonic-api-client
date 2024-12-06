import { z } from 'zod';
import { emptyRequestSchema } from '@/open-subsonic-types.js';
import { bookmarkSchema } from '@/responses/bookmark.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: '/getBookmarks.view',
    summary: 'Returns all bookmarks for this user.',
});

export const getBookmarks = {
    ...createEndpoint.ss('SS.1.16.1', {
        request: emptyRequestSchema,
        response: z.object({
            bookmark: bookmarkSchema.ss['1.16.1'].array(),
        }),
        ...properties,
    }),
    ...createEndpoint.os('OS.1', {
        request: emptyRequestSchema,
        response: z.object({
            bookmark: bookmarkSchema.os['1'].array(),
        }),
        ...properties,
    }),
};
