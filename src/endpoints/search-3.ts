import { z } from 'zod';
import { searchResult3Schema } from '@/responses/search-result-3.js';
import { createEndpoint } from '@/utils.js';

export const search3 = createEndpoint(
    {
        path: 'search3.view',
        request: {
            default: z.object({
                albumCount: z.number().optional(),
                albumOffset: z.number().optional(),
                artistCount: z.number().optional(),
                artistOffset: z.number().optional(),
                musicFolderId: z.string().optional(),
                query: z.string().optional(),
                songCount: z.number().optional(),
                songOffset: z.number().optional(),
            }),
        },
        response: {
            default: searchResult3Schema.ss['1.16.1'],
            os: {
                '1': searchResult3Schema.os['1'],
            },
        },
        summary:
            'Returns albums, artists and songs matching the given search criteria. Supports paging through the result.',
    },
    {
        os: { '1': true },
        ss: { '1.16.1': true },
    },
);
