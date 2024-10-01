import { z } from 'zod';
import { similarSongs2Schema } from '@/responses/similar-songs-2.js';
import { createEndpoint } from '@/utils.js';

export const getSimilarSongs2 = createEndpoint(
    {
        path: 'getSimilarSongs2.view',
        request: {
            default: z.object({
                count: z.number().optional(),
                id: z.string(),
            }),
        },
        response: {
            default: z.object({
                similarSongs: similarSongs2Schema.ss['1.16.1'],
            }),
            os: {
                '1': z.object({
                    similarSongs: similarSongs2Schema.os['1'],
                }),
            },
        },
        summary: 'Returns a random collection of songs from the given artist and similar artists.',
    },
    {
        os: { '1': true },
        ss: { '1.16.1': true },
    },
);
