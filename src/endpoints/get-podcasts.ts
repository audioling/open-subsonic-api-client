import { z } from 'zod';
import { podcastsSchema } from '@/responses/podcasts.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: 'getPodcasts.view',
    summary: 'Returns a list of podcasts.',
});

const requestSchema = z.object({
    id: z.string().optional(),
    includeEpisodes: z.boolean().optional().default(true),
});

export const getPodcasts = {
    ...createEndpoint.ss('SS.1.16.1', {
        request: requestSchema,
        response: z.object({
            podcasts: podcastsSchema.ss['1.16.1'],
        }),
        ...properties,
    }),
    ...createEndpoint.os('OS.1', {
        request: requestSchema,
        response: z.object({
            podcasts: podcastsSchema.ss['1.16.1'],
        }),
        ...properties,
    }),
};
