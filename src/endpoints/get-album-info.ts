import { z } from 'zod';
import { albumInfoSchema } from '@/responses/album-info.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: '/getAlbumInfo.view',
    summary: 'Returns album info.',
});

const requestSchema = z.object({
    id: z.string(),
});

export const getAlbumInfo = {
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
