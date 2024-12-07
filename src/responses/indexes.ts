import { z } from 'zod';
import { artistSchema } from '@/responses/artist.js';
import { childSchema } from '@/responses/child.js';
import { indexId3Schema } from '@/responses/index-id3.js';

export const indexesSchema = {
    os: {
        '1': z.object({
            child: childSchema.os['1'].array().optional(),
            ignoredArticles: z.string(),
            index: indexId3Schema.os['1'].array().optional(),
            lastModified: z
                .number()
                .describe(
                    'Last time the index was modified in milliseconds after January 1, 1970 UTC',
                ),
            shortcut: artistSchema.os['1'].array().optional(),
        }),
    },
    ss: {
        '1.16.1': z.object({
            child: childSchema.ss['1.16.1'].array().optional(),
            ignoredArticles: z.string(),
            index: indexId3Schema.ss['1.16.1'].array().optional(),
            lastModified: z
                .number()
                .describe(
                    'Last time the index was modified in milliseconds after January 1, 1970 UTC',
                ),
            shortcut: artistSchema.ss['1.16.1'].array().optional(),
        }),
    },
};
