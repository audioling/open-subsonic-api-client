import { z } from 'zod';
import { indexesSchema } from '@/responses/indexes.js';
import { createEndpoint } from '@/utils.js';

const request = z.object({
    ifModifiedSince: z.string().optional(),
    musicFolderId: z
        .string()
        .optional()
        .describe(
            'If specified, only return a result if the artist collection has changed since the given time (in milliseconds since 1 Jan 1970).',
        ),
});

export const getIndexes = createEndpoint(
    {
        path: 'getIndexes.view',
        request: { default: request },
        response: {
            default: z.object({
                indexes: indexesSchema.ss['1.16.1'],
            }),
            os: {
                '1': z.object({
                    indexes: indexesSchema.os['1'],
                }),
            },
        },
        summary: 'Returns an indexed structure of all artists.',
    },
    {
        os: { '1': true },
        ss: { '1.16.1': true },
    },
);
