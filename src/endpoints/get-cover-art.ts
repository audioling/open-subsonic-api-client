import { initContract } from '@ts-rest/core';
import { z } from 'zod';

const c = initContract();

export const getCoverArt = c.query({
    method: 'GET',
    path: 'getCoverArt.view',
    query: z.object({
        id: z.string(),
        size: z.number().optional().describe('The image width and height in px'),
    }),
    responses: {
        200: z.string(),
    },
    summary: 'Returns a cover art image.',
});
