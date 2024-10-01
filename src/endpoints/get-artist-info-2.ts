import { z } from 'zod';
import { artistInfo2Schema } from '@/responses/artist-info-2.js';
import { createEndpoint } from '@/utils.js';

const request = z.object({
    count: z.number().optional(),
    id: z.string(),
    includeNotPresent: z.boolean().optional(),
});

export const getArtistInfo2 = createEndpoint(
    {
        path: 'getArtistInfo2.view',
        request: { default: request },
        response: {
            default: z.object({
                artistInfo: artistInfo2Schema.ss['1.16.1'],
            }),
            os: {
                '1': z.object({
                    artistInfo: artistInfo2Schema.os['1'],
                }),
            },
        },
        summary: 'Returns artist info.',
    },
    {
        os: { '1': true },
        ss: { '1.16.1': true },
    },
);
