import { z } from 'zod';
import { albumList2Schema } from '@/responses/album-list-2.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: '/getAlbumList2.view',
    summary:
        'Returns a list of random, newest, highest rated etc. albums. Similar to getAlbumList, but organizes music according to ID3 tags.',
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

export const getAlbumList2 = {
    ...createEndpoint.ss('SS.1.16.1', {
        request: requestSchema,
        response: z.object({
            albumList2: albumList2Schema.ss['1.16.1'],
        }),
        ...properties,
    }),
    ...createEndpoint.os('OS.1', {
        request: requestSchema,
        response: z.object({
            albumList2: albumList2Schema.os['1'],
        }),
        ...properties,
    }),
};
