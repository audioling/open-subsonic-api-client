import { z } from 'zod';
import { newestPodcastsSchema } from '@/responses/newest-podcasts.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: '/getNewestPodcasts.view',
    summary: 'Returns the most recently published Podcast episodes.',
});

const requestSchema = z.object({
    id: z.string().optional(),
    includeEpisodes: z.boolean().optional().default(true),
});

export const getNewestPodcasts = {
    ...createEndpoint.ss('SS.1.16.1', {
        request: requestSchema,
        response: z.object({
            podcasts: newestPodcastsSchema.ss['1.16.1'],
        }),
        ...properties,
    }),
    ...createEndpoint.os('OS.1', {
        request: requestSchema,
        response: z.object({
            podcasts: newestPodcastsSchema.ss['1.16.1'],
        }),
        ...properties,
    }),
};
