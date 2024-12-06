import { emptyRequestSchema, emptyResponseSchema } from '@/open-subsonic-types.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: 'createPodcastChannel.view',
    summary: 'Adds a new Podcast channel.',
});

export const createPodcastChannel = {
    ...createEndpoint.ss('SS.1.16.1', {
        request: emptyRequestSchema,
        response: emptyResponseSchema,
        ...properties,
    }),
    ...createEndpoint.os('OS.1', {
        request: emptyRequestSchema,
        response: emptyResponseSchema,
        ...properties,
    }),
};
