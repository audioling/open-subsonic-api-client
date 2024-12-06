import { z } from 'zod';
import { emptyRequestSchema } from '@/open-subsonic-types.js';
import { videosSchema } from '@/responses/videos.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: 'getVideos.view',
    summary: 'Returns all video files.',
});

const requestSchema = z.object({
    message: z.string().describe('The chat message.'),
});

export const getVideos = {
    ...createEndpoint.ss('SS.1.16.1', {
        request: emptyRequestSchema,
        response: z.object({
            videos: videosSchema.ss['1.16.1'],
        }),
        ...properties,
    }),
    ...createEndpoint.os('OS.1', {
        request: requestSchema,
        response: z.object({
            videos: videosSchema.ss['1.16.1'],
        }),
        ...properties,
    }),
};
