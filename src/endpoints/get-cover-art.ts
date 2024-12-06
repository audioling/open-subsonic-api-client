import { z } from 'zod';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: '/getCoverArt.view',
    summary: 'Returns the cover art for a given album or artist.',
});

const requestSchema = z.object({
    id: z.string(),
    size: z.number().optional().describe('The image width and height in px'),
});

export const getCoverArt = {
    ...createEndpoint.osExplicit('OS.1', {
        request: requestSchema,
        response: z.string(),
        ...properties,
    }),
    ...createEndpoint.ssExplicit('SS.1.16.1', {
        request: requestSchema,
        response: z.string(),
        ...properties,
    }),
};
