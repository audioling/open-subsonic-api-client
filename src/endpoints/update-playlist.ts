import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { baseResponseSchema } from '@/open-subsonic-types.js';

const c = initContract();

const properties = {
    path: 'updatePlaylist.view',
    responses: {
        200: baseResponseSchema,
    },
    summary: 'Updates a playlist. Only the owner of a playlist is allowed to update it.',
};

const request = z.object({
    comment: z.string().optional(),
    name: z.string().optional(),
    playlistId: z.string(),
    public: z.boolean().optional(),
    songIdToAdd: z.string().array().optional(),
    songIdToRemove: z.string().array().optional(),
});

export const updatePlaylist = {
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
