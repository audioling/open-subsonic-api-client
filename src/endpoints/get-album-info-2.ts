import { z } from 'zod';
import { albumInfoSchema } from '@/responses/album-info.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: '/getAlbumInfo2.view',
    summary:
        'Returns album info. Similar to getAlbumInfo, but organizes music according to ID3 tags.',
});

const requestSchema = z.object({
    id: z.string(),
});

export const getAlbumInfo2 = {
    ...createEndpoint.ss('SS.1.16.1', {
        request: requestSchema,
        response: albumInfoSchema.ss['1.16.1'],
        ...properties,
    }),
    ...createEndpoint.os('OS.1', {
        request: requestSchema,
        response: albumInfoSchema.ss['1.16.1'],
        ...properties,
    }),
};
