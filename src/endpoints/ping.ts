import { emptyRequestSchema, emptyResponseSchema } from '@/open-subsonic-types.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: '/ping.view',
    summary: 'Ping Subsonic server to keep the connection alive.',
});

export const ping = {
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
