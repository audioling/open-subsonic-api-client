import { z } from 'zod';
import { albumListSchema } from '@/responses/album-list.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: '/getAlbumList.view',
    summary: 'Returns a list of random, newest, highest rated etc. albums.',
});

const requestSchema = z.object({
    fromYear: z.number().optional(),
    genre: z.string().optional(),
    musicFolderId: z.number().optional(),
    offset: z.number().optional(),
    size: z.number().optional(),
    toYear: z.number().optional(),
    type: z.enum([
        'random',
        'newest',
        'frequent',
        'recent',
        'starred',
        'highest',
        'alphabeticalByName',
        'alphabeticalByArtist',
        'byYear',
        'byGenre',
    ]),
});

export const getAlbumList = {
    ...createEndpoint.ss('SS.1.16.1', {
        request: requestSchema,
        response: z.object({
            albumList2: albumListSchema.ss['1.16.1'],
        }),
        ...properties,
    }),
    ...createEndpoint.os('OS.1', {
        request: requestSchema,
        response: z.object({
            albumList2: albumListSchema.os['1'],
        }),
        ...properties,
    }),
};
