import { z } from 'zod';
import { videoInfoSchema } from '@/responses/video-info.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: 'getVideoInfo.view',
    summary: 'Returns details for a video.',
});

const requestSchema = z.object({
    id: z.string(),
});

export const getVideoInfo = {
    ...createEndpoint.ss('SS.1.16.1', {
        request: requestSchema,
        response: z.object({
            videoInfo: videoInfoSchema.ss['1.16.1'],
        }),
        ...properties,
    }),
    ...createEndpoint.os('OS.1', {
        request: requestSchema,
        response: z.object({
            videoInfo: videoInfoSchema.ss['1.16.1'],
        }),
        ...properties,
    }),
};
