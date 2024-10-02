import { z } from 'zod';
import { artistInfo2Schema } from '@/responses/artist-info-2.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: 'getArtistInfo2.view',
    summary: 'Returns artist info.',
});

const requestSchema = z.object({
    count: z.number().optional(),
    id: z.string(),
    includeNotPresent: z.boolean().optional(),
});

export const getArtistInfo2 = {
    ...createEndpoint.ss('SS.1.16.1', {
        request: requestSchema,
        response: z.object({
            artistInfo: artistInfo2Schema.ss['1.16.1'],
        }),
        ...properties,
    }),
    ...createEndpoint.os('OS.1', {
        request: requestSchema,
        response: z.object({
            artistInfo: artistInfo2Schema.os['1'],
        }),
        ...properties,
    }),
};
