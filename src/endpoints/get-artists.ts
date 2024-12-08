import { z } from 'zod';
import { artistsId3Schema } from '@/responses/artists-id3.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: '/getArtists.view',
    summary: 'Returns a list of all artists.',
});

const requestSchema = z.object({
    musicFolderId: z.number().optional(),
});

export const getArtists = {
    ...createEndpoint.ss('SS.1.16.1', {
        request: requestSchema,
        response: z.object({
            artists: artistsId3Schema.ss['1.16.1'],
        }),
        ...properties,
    }),
    ...createEndpoint.os('OS.1', {
        request: requestSchema,
        response: z.object({
            artists: artistsId3Schema.os['1'],
        }),
        ...properties,
    }),
};
