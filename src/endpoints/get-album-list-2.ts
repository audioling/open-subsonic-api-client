import { z } from 'zod';
import { albumList2Schema } from '@/responses/album-list-2.js';
import { createEndpoint } from '@/utils.js';

export const getAlbumList2 = createEndpoint(
    {
        path: 'getAlbumList2.view',
        request: {
            default: z.object({
                fromYear: z.number().optional(),
                genre: z.string().optional(),
                musicFolderId: z.string().optional(),
                offset: z.number().optional(),
                size: z.number().optional(),
                toYear: z.number().optional(),
                type: z.enum([
                    'random',
                    'newest',
                    'frequent',
                    'recent',
                    'starred',
                    'alphabeticalByName',
                    'alphabeticalByArtist',
                    'byYear',
                    'byGenre',
                ]),
            }),
        },
        response: {
            default: z.object({
                albumList2: albumList2Schema.ss['1.16.1'],
            }),
            os: {
                '1': z.object({
                    albumList2: albumList2Schema.os['1'],
                }),
            },
        },
        summary: 'Returns a list of random, newest, highest rated etc. albums.',
    },
    {
        os: { '1': true },
        ss: { '1.16.1': true },
    },
);
