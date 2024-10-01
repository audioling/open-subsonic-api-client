import { z } from 'zod';
import { childSchema } from '@/responses/child.js';

export const shareSchema = {
    ss: {
        '1.16.1': z.object({
            created: z.string(),
            description: z.string().optional(),
            entry: childSchema.ss['1.16.1'].array().optional(),
            expires: z.string().optional(),
            id: z.string(),
            lastVisited: z.string().optional(),
            url: z.string(),
            username: z.string(),
            visitCount: z.number(),
        }),
    },
};
