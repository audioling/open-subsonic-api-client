import { z } from 'zod';
import { songsByGenreSchema } from '@/responses/songs-by-genre.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: '/getSongsByGenre.view',
    summary: 'Returns a list of songs in a given genre.',
});

const requestSchema = z.object({
    count: z.number().optional(),
    genre: z.string(),
    musicFolderId: z.string().optional(),
    offset: z.number().optional(),
});

export const getSongsByGenre = {
    ...createEndpoint.ss('SS.1.16.1', {
        request: requestSchema,
        response: z.object({
            songs: songsByGenreSchema.ss['1.16.1'],
        }),
        ...properties,
    }),
    ...createEndpoint.os('OS.1', {
        request: requestSchema,
        response: z.object({
            songs: songsByGenreSchema.os['1'],
        }),
        ...properties,
    }),
};
