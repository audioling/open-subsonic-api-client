import { z } from 'zod';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: '/hls.view',
    summary: 'Downloads a given media file.',
});

const requestSchema = z.object({
    audioTrack: z.string().optional(),
    bitRate: z.number().optional(),
    id: z.string(),
});

export const hls = {
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
