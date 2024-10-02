import { z } from 'zod';
import { albumId3Schema } from '@/responses/album-id3.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: 'getAlbum.view',
    summary: 'Returns details for an album.',
});

const requestSchema = z.object({
    id: z.string(),
});

export const getAlbum = {
    ...createEndpoint.ss('SS.1.16.1', {
        request: requestSchema,
        response: z.object({
            album: albumId3Schema.ss['1.16.1'],
        }),
        ...properties,
    }),
    ...createEndpoint.os('OS.1', {
        request: requestSchema,
        response: z.object({
            album: albumId3Schema.os['1'],
        }),
        ...properties,
    }),
};
