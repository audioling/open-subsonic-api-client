import { z } from 'zod';
import { similarSongsSchema } from '@/responses/similar-songs.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: 'getSimilarSongs2.view',
    summary: 'Returns a random collection of songs from the given artist and similar artists.',
});

const requestSchema = z.object({
    count: z.number().optional(),
    id: z.string(),
});

export const getSimilarSongs = {
    ...createEndpoint.ss('SS.1.16.1', {
        request: requestSchema,
        response: z.object({
            similarSongs: similarSongsSchema.ss['1.16.1'],
        }),
        ...properties,
    }),
    ...createEndpoint.os('OS.1', {
        request: requestSchema,
        response: z.object({
            similarSongs: similarSongsSchema.os['1'],
        }),
        ...properties,
    }),
};
