import { z } from 'zod';
import { topSongsSchema } from '@/responses/top-songs.js';
import { createEndpoint } from '@/utils.js';

const request = z.object({
    artist: z.string().describe('The name of the artist'),
    count: z.number().optional(),
});

export const getTopSongs = createEndpoint(
    {
        path: 'getTopSongs.view',
        request: { default: request },
        response: {
            default: z.object({
                topSongs: topSongsSchema.ss['1.16.1'],
            }),
            os: {
                '1': z.object({
                    topSongs: z.object({
                        song: topSongsSchema.os['1'],
                    }),
                }),
            },
        },
        summary: 'Returns top songs for the given artist.',
    },
    {
        os: { '1': true },
        ss: { '1.16.1': true },
    },
);
