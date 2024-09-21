import { initContract } from '@ts-rest/core';
import { z } from 'zod';

const c = initContract();

const properties = {
    path: 'getCoverArt.view',
    responses: {
        200: z.string(),
    },
    summary: 'Returns a cover art image.',
};

const request = z.object({
    id: z.string(),
    size: z.number().optional().describe('The image width and height in px'),
});

export const getCoverArt = {
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
