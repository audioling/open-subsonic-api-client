import { z } from 'zod';
import { childSchema } from '@/responses/child.js';

const schema = z.object({
    created: z.string(),
    description: z.string().optional(),
    expires: z.string().optional(),
    id: z.string(),
    lastVisited: z.string().optional(),
    url: z.string(),
    username: z.string(),
    visitCount: z.number(),
});

export const shareSchema = {
    os: {
        '1': schema.extend({
            entry: childSchema.os['1'].array(),
        }),
    },
    ss: {
        '1.16.1': schema.extend({
            entry: childSchema.ss['1.16.1'].array(),
        }),
    },
};
