import { z } from 'zod';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: 'download.view',
    summary: 'Downloads a given media file.',
});

const requestSchema = z.object({
    id: z.string(),
});

export const download = {
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
