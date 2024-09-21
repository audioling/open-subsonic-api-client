import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { baseResponseSchema } from '@/open-subsonic-types.js';

const c = initContract();

const properties = {
    path: 'createPlaylist.view',
    responses: {
        200: baseResponseSchema,
    },
    summary: 'Creates (or updates) a playlist.',
};

const request = z.object({
    name: z.string().optional(),
    playlistId: z.string().optional(),
    songId: z.string().array(),
});

export const createPlaylist = {
    get: c.query({
        method: 'GET',
        path: 'createPlaylist.view',
        responses: {
            200: baseResponseSchema,
        },
        summary: 'Creates (or updates) a playlist.',
    }),
    post: c.mutation({
        body: request,
        contentType: 'application/x-www-form-urlencoded',
        method: 'POST',
        ...properties,
    }),
};
