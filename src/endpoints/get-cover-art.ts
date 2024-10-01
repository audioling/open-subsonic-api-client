import { z } from 'zod';
import { createEndpoint } from '@/utils.js';

const request = z.object({
    id: z.string(),
    size: z.number().optional().describe('The image width and height in px'),
});

export const getCoverArt = createEndpoint(
    {
        path: 'getCoverArt.view',
        request: { default: request },
        response: {
            default: z.string(),
        },
    },
    {
        os: { '1': true },
        ss: { '1.16.1': true },
    },
);
