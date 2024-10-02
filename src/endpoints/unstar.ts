import { z } from 'zod';
import { emptyResponseSchema } from '@/open-subsonic-types.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: 'unstar.view',
    summary: 'Attaches a star to a song, album or artist.',
});

const requestSchema = z.object({
    albumId: z.string().array().optional(),
    artistId: z.string().array().optional(),
    id: z.string().array().optional(),
});

export const unstar = {
    ...createEndpoint.ss('SS.1.16.1', {
        request: requestSchema,
        response: emptyResponseSchema,
        ...properties,
    }),
    ...createEndpoint.os('OS.1', {
        request: requestSchema,
        response: emptyResponseSchema,
        ...properties,
    }),
};
