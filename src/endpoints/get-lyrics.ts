import { z } from 'zod';
import { lyricsSchema } from '@/responses/lyrics.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: '/getLyrics.view',
    summary: 'Searches for and returns lyrics for a given song.',
});

const requestSchema = z.object({
    artist: z.string().optional(),
    title: z.string().optional(),
});

export const getLyrics = {
    ...createEndpoint.ss('SS.1.16.1', {
        request: requestSchema,
        response: z.object({
            lyrics: lyricsSchema.ss['1.16.1'],
        }),
        ...properties,
    }),
    ...createEndpoint.os('OS.1', {
        request: requestSchema,
        response: z.object({
            lyrics: lyricsSchema.ss['1.16.1'],
        }),
        ...properties,
    }),
};
