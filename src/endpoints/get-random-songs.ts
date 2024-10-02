import { z } from 'zod';
import { randomSongsSchema } from '@/responses/random-songs.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: 'getRandomSongs.view',
    summary: 'Returns random songs matching the given criteria.',
});

const requestSchema = z.object({
    fromYear: z.number().optional(),
    genre: z.string().optional(),
    musicFolderId: z.string().optional(),
    size: z.number().optional(),
    toYear: z.number().optional(),
});

export const getRandomSongs = {
    ...createEndpoint.ss('SS.1.16.1', {
        request: requestSchema,
        response: z.object({
            randomSongs: randomSongsSchema.ss['1.16.1'],
        }),
        ...properties,
    }),
    ...createEndpoint.os('OS.1', {
        request: requestSchema,
        response: z.object({
            randomSongs: randomSongsSchema.os['1'],
        }),
        ...properties,
    }),
};
