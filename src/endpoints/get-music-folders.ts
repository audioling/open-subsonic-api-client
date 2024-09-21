import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { baseResponseSchema } from '@/open-subsonic-types.js';

const c = initContract();

const properties = {
    path: 'getMusicFolders.view',
    responses: {
        200: baseResponseSchema.extend({
            musicFolders: z.object({
                musicFolder: z
                    .object({
                        id: z.string(),
                        name: z.string(),
                    })
                    .array(),
            }),
        }),
    },
    summary: 'Returns all configured top-level music folders.',
};

export const getMusicFolders = {
    get: c.query({
        method: 'GET',
        ...properties,
    }),
    post: c.mutation({
        body: z.object({}),
        contentType: 'application/x-www-form-urlencoded',
        method: 'POST',
        ...properties,
    }),
};
