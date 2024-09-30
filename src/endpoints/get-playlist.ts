import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { baseResponseSchema, playlistSchema, songSchema } from '@/open-subsonic-types.js';

const c = initContract();

const properties = {
    path: 'getPlaylist.view',
    responses: {
        200: baseResponseSchema.extend({
            playlist: playlistSchema.extend({
                entry: songSchema.array().optional(),
            }),
        }),
    },
    summary: 'Returns a listing of files in a saved playlist.',
};

const request = z.object({
    id: z.string(),
});

export const getPlaylist = {
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
