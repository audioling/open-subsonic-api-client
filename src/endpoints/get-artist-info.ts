import { z } from 'zod';
import { artistInfoSchema } from '@/responses/artist-info.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: '/getArtistInfo.view',
    summary: 'Returns artist info.',
});

const requestSchema = z.object({
    count: z.number().optional().default(20),
    id: z.string(),
    includeNotPresent: z.boolean().optional(),
});

export const getArtistInfo = {
    ...createEndpoint.ss('SS.1.16.1', {
        request: requestSchema,
        response: z.object({
            artistInfo: artistInfoSchema.ss['1.16.1'],
        }),
        ...properties,
    }),
    ...createEndpoint.os('OS.1', {
        request: requestSchema,
        response: z.object({
            artistInfo: artistInfoSchema.os['1'],
        }),
        ...properties,
    }),
};
