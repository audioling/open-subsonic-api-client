import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { baseResponseSchema } from '@/open-subsonic-types.js';

const c = initContract();

export const getMusicFolders = c.query({
    method: 'GET',
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
});
