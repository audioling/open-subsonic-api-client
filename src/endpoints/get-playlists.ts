import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { baseResponseSchema, playlistSchema } from '@/open-subsonic-types.js';

const c = initContract();

const properties = {
    path: 'getPlaylists.view',
    responses: {
        200: baseResponseSchema.extend({
            playlists: z.object({
                playlist: z.array(playlistSchema),
            }),
        }),
    },
    summary: 'Returns all playlists a user is allowed to play.',
};

const request = z.object({
    username: z.string().optional(),
});

export const getPlaylists = {
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
