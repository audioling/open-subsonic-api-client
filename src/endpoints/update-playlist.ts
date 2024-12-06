import { z } from 'zod';
import { emptyResponseSchema } from '@/open-subsonic-types.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: '/updatePlaylist.view',
    summary: 'Updates a playlist. Only the owner of a playlist is allowed to update it.',
});

export const requestSchema = z.object({
    comment: z.string().optional(),
    name: z.string().optional(),
    playlistId: z.string(),
    public: z.boolean().optional(),
    songIdToAdd: z.string().array().optional(),
    songIdToRemove: z.string().array().optional(),
});

export const updatePlaylist = {
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
