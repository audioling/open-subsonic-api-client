import { z } from 'zod';
import { emptyResponseSchema } from '@/open-subsonic-types.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: '/updateInternetRadioStation.view',
    summary: 'Updates an existing internet radio station.',
});

const requestSchema = z.object({
    homepageUrl: z.string().optional(),
    id: z.string(),
    name: z.string(),
    streamUrl: z.string(),
});

export const updateInternetRadioStation = {
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
