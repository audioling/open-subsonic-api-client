import { z } from 'zod';
import { searchResult3Schema } from '@/responses/search-result-3.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: 'search3.view',
    summary:
        'Returns albums, artists and songs matching the given search criteria. Supports paging through the result.',
});

const requestSchema = z.object({
    albumCount: z.number().optional(),
    albumOffset: z.number().optional(),
    artistCount: z.number().optional(),
    artistOffset: z.number().optional(),
    musicFolderId: z.string().optional(),
    query: z.string().optional(),
    songCount: z.number().optional(),
    songOffset: z.number().optional(),
});

export const search3 = {
    ...createEndpoint.ss('SS.1.16.1', {
        request: requestSchema,
        response: z.object({
            searchResult3: searchResult3Schema.ss['1.16.1'],
        }),
        ...properties,
    }),
    ...createEndpoint.os('OS.1', {
        request: requestSchema,
        response: z.object({
            searchResult3: searchResult3Schema.os['1'],
        }),
        ...properties,
    }),
};
