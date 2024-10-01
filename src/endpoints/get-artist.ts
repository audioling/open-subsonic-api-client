import { z } from 'zod';
import { artistSchema } from '@/responses/artist.js';
import { createEndpoint } from '@/utils.js';

const request = z.object({
    id: z.string(),
});

export const getArtist = createEndpoint(
    {
        path: 'getArtist.view',
        request: { default: request },
        response: {
            default: z.object({
                artist: artistSchema.ss['1.16.1'],
            }),
            os: {
                '1': z.object({
                    artist: artistSchema.os['1'],
                }),
            },
        },
        summary:
            'Returns details for an artist, including a list of albums. This method organizes music according to ID3 tags.',
    },
    {
        os: { '1': true },
        ss: { '1.16.1': true },
    },
);
