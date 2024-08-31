import { initContract } from '@ts-rest/core';
import { z } from 'zod';

const c = initContract();

export const download = c.query({
    method: 'GET',
    path: 'download',
    query: z.object({
        id: z.string(),
    }),
    responses: {
        200: z.string(),
    },
    summary: 'Downloads a given media file.',
});
