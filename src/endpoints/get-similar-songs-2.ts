import { z } from 'zod';
import { similarSongs2Schema } from '@/responses/similar-songs-2.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: 'getSimilarSongs2.view',
    summary: 'Returns a random collection of songs from the given artist and similar artists.',
});

const requestSchema = z.object({
    count: z.number().optional(),
    id: z.string(),
});

export const getSimilarSongs2 = {
    ...createEndpoint.ss('SS.1.16.1', {
        request: requestSchema,
        response: z.object({
            similarSongs: similarSongs2Schema.ss['1.16.1'],
        }),
        ...properties,
    }),
    ...createEndpoint.os('OS.1', {
        request: requestSchema,
        response: z.object({
            similarSongs: similarSongs2Schema.os['1'],
        }),
        ...properties,
    }),
};
