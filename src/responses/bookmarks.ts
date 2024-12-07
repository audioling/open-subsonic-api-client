import { z } from 'zod';
import { bookmarkSchema } from '@/responses/bookmark.js';

export const bookmarksSchema = {
    os: {
        '1': z.object({
            bookmark: bookmarkSchema.os['1'].array().optional(),
        }),
    },
    ss: {
        '1.16.1': z.object({
            bookmark: bookmarkSchema.ss['1.16.1'].array().optional(),
        }),
    },
};
