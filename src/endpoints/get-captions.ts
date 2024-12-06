import { z } from 'zod';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: 'getCaptions.view',
    summary: 'Returns captions (subtitles) for a video.',
});

const requestSchema = z.object({
    format: z.string().optional(),
    id: z.string(),
});

export const getCaptions = {
    ...createEndpoint.ssExplicit('SS.1.16.1', {
        request: requestSchema,
        response: z.string(),
        ...properties,
    }),
    ...createEndpoint.osExplicit('OS.1', {
        request: requestSchema,
        response: z.string(),
        ...properties,
    }),
};
