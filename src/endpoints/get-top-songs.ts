import { z } from 'zod';
import { topSongsSchema } from '@/responses/top-songs.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: 'getTopSongs.view',
    summary: 'Returns top songs for the given artist.',
});

const requestSchema = z.object({
    artist: z.string().describe('The name of the artist'),
    count: z.number().optional(),
});

export const getTopSongs = {
    ...createEndpoint.ss('SS.1.16.1', {
        request: requestSchema,
        response: z.object({
            topSongs: topSongsSchema.ss['1.16.1'],
        }),
        ...properties,
    }),
    ...createEndpoint.os('OS.1', {
        request: requestSchema,
        response: z.object({
            topSongs: topSongsSchema.os['1'],
        }),
        ...properties,
    }),
};
