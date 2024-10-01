import { z } from 'zod';
import { randomSongsSchema } from '@/responses/random-songs.js';
import { createEndpoint } from '@/utils.js';

const request = z.object({
    fromYear: z.number().optional(),
    genre: z.string().optional(),
    musicFolderId: z.string().optional(),
    size: z.number().optional(),
    toYear: z.number().optional(),
});

export const getRandomSongs = createEndpoint(
    {
        path: 'getRandomSongs.view',
        request: { default: request },
        response: {
            default: z.object({
                randomSongs: randomSongsSchema.ss['1.16.1'],
            }),
            os: {
                '1': z.object({
                    randomSongs: randomSongsSchema.os['1'],
                }),
            },
        },
        summary: 'Returns random songs matching the given criteria.',
    },
    {
        os: { '1': true },
        ss: { '1.16.1': true },
    },
);
