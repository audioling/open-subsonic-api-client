import { z } from 'zod';
import { albumId3WithSongSchema } from '@/responses/album-id3-with-song.js';
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
            album: albumId3WithSongSchema.ss['1.16.1'],
        }),
        ...properties,
    }),
    ...createEndpoint.os('OS.1', {
        request: requestSchema,
        response: z.object({
            album: albumId3WithSongSchema.os['1'],
        }),
        ...properties,
    }),
};
