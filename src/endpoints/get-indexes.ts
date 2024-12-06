import { z } from 'zod';
import { indexesSchema } from '@/responses/indexes.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: '/getIndexes.view',
    summary: 'Returns an indexed structure of all artists.',
});

const requestSchema = z.object({
    ifModifiedSince: z.string().optional(),
    musicFolderId: z
        .string()
        .optional()
        .describe(
            'If specified, only return a result if the artist collection has changed since the given time (in milliseconds since 1 Jan 1970).',
        ),
});

export const getIndexes = {
    ...createEndpoint.ss('SS.1.16.1', {
        request: requestSchema,
        response: z.object({
            indexes: indexesSchema.ss['1.16.1'],
        }),
        ...properties,
    }),
    ...createEndpoint.os('OS.1', {
        request: requestSchema,
        response: z.object({
            indexes: indexesSchema.os['1'],
        }),
        ...properties,
    }),
};
