import { z } from 'zod';
import { lyricsSchema } from '@/responses/lyrics.js';
import { createEndpoint } from '@/utils.js';

const request = z.object({
    artist: z.string().optional(),
    title: z.string().optional(),
});

export const getLyrics = createEndpoint(
    {
        path: 'getLyrics.view',
        request: { default: request },
        response: {
            default: lyricsSchema.ss['1.16.1'],
        },
        summary: 'Searches for and returns lyrics for a given song.',
    },
    {
        os: { '1': true },
        ss: { '1.16.1': true },
    },
);
