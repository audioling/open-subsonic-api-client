import { z } from 'zod';
import { lyricsListSchema } from '@/responses/lyrics-list.js';
import { createEndpoint } from '@/utils.js';

const request = z.object({
    id: z.string(),
});

export const getLyricsBySongId = createEndpoint(
    {
        path: 'getLyricsBySongId.view',
        request: { default: request },
        response: {
            default: z.object({
                lyricsList: lyricsListSchema.os['1'],
            }),
        },
        summary: 'Retrieves all structured lyrics from the server for a given song.',
    },
    {
        os: { '1': true },
        ss: { '1.16.1': false },
    },
);
