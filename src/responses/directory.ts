import { z } from 'zod';
import { childSchema } from '@/responses/child.js';

const schema = z.object({
    averageRating: z.number().optional(),
    id: z.string(),
    name: z.string(),
    parent: z.string().optional(),
    playCount: z.number().optional(),
    starred: z.string().optional(),
    userRating: z.number().optional(),
});

export const directorySchema = {
    os: {
        '1': schema.extend({
            child: childSchema.os['1'].array().optional(),
        }),
    },
    ss: {
        '1.16.1': schema.extend({
            child: childSchema.ss['1.16.1'].array().optional(),
        }),
    },
};
