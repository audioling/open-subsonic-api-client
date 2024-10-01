import { z } from 'zod';
import { indexId3Schema } from '@/responses/index-id3.js';

export const artistsId3Schema = {
    os: {
        '1': z.object({
            ignoredArticles: z.string(),
            index: indexId3Schema.os['1'].array(),
        }),
    },
    ss: {
        '1.16.1': z.object({
            ignoredArticles: z.string(),
            index: indexId3Schema.ss['1.16.1'].array(),
        }),
    },
};
