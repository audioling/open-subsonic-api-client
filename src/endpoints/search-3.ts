import { z } from 'zod';
import { searchResult3Schema } from '@/responses/search-result-3.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: '/search3.view',
    summary:
        'Returns albums, artists and songs matching the given search criteria. Supports paging through the result.',
});

const requestSchema = z.object({
    albumCount: z.number().optional().default(20),
    albumOffset: z.number().optional().default(0),
    artistCount: z.number().optional().default(20),
    artistOffset: z.number().optional().default(0),
    musicFolderId: z.number().optional(),
    query: z.string().optional(),
    songCount: z.number().optional().default(20),
    songOffset: z.number().optional().default(0),
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
