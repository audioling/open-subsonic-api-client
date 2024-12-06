import { emptyRequestSchema, emptyResponseSchema } from '@/open-subsonic-types.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: '/refreshPodcasts.view',
    summary: 'Requests the server to check for new Podcast episodes.',
});

export const refreshPodcasts = {
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
