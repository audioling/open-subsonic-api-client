import { z } from 'zod';
import { emptyResponseSchema } from '@/open-subsonic-types.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: '/createInternetRadioStation.view',
    summary: 'Adds a new internet radio station.',
});

const requestSchema = z.object({
    homepageUrl: z.string().optional(),
    name: z.string(),
    streamUrl: z.string(),
});

export const createInternetRadioStation = {
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
