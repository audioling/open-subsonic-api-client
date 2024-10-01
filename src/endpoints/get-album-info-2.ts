import { z } from 'zod';
import { albumInfoSchema } from '@/responses/album-info.js';
import { createEndpoint } from '@/utils.js';

export const getAlbumInfo2 = createEndpoint(
    {
        path: 'getAlbumInfo2.view',
        request: {
            default: z.object({
                id: z.string(),
            }),
        },
        response: {
            default: z.object({
                albumInfo: albumInfoSchema.ss['1.16.1'],
            }),
        },
        summary: 'Returns album info.',
    },
    {
        os: { '1': true },
        ss: { '1.16.1': true },
    },
);
