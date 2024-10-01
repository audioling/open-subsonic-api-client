import { z } from 'zod';
import { artistsId3Schema } from '@/responses/artists-id3.js';
import { createEndpoint } from '@/utils.js';

const request = z.object({
    musicFolderId: z.string().optional(),
});

export const getArtists = createEndpoint(
    {
        path: '/rest/getArtists.view',
        request: { default: request },
        response: {
            default: z.object({
                artists: artistsId3Schema.ss['1.16.1'],
            }),
            os: {
                '1': z.object({
                    artists: artistsId3Schema.os['1'],
                }),
            },
        },
    },
    {
        os: { '1': true },
        ss: { '1.16.1': true },
    },
);
