import { z } from 'zod';
import { albumId3Schema } from '@/responses/album-id3.js';
import { createEndpoint } from '@/utils.js';

export const getAlbum = createEndpoint(
    {
        path: 'getAlbum.view',
        request: {
            default: z.object({
                id: z.string(),
            }),
        },
        response: {
            default: z.object({
                album: albumId3Schema.ss['1.16.1'],
            }),
            os: {
                '1': z.object({
                    album: albumId3Schema.os['1'],
                }),
            },
        },
        summary: 'Returns details for an album.',
    },
    {
        os: { '1': true },
        ss: { '1.16.1': true },
    },
);
