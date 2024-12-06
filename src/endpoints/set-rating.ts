import { z } from 'zod';
import { emptyResponseSchema } from '@/open-subsonic-types.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: '/setRating.view',
    summary: 'Sets the rating for an item.',
});

const requestSchema = z.object({
    id: z.string(),
    rating: z.number().int().min(0).max(5).describe('The rating from 0 to 5'),
});

export const setRating = {
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
