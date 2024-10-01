import { z } from 'zod';
import { childSchema } from '@/responses/child.js';

const schema = z.object({
    changed: z.string(),
    comment: z.string().optional(),
    created: z.string(),
    position: z.number(),
    username: z.string(),
});

export const bookmarkSchema = {
    os: {
        '1': schema.extend({
            entry: childSchema.os['1'],
        }),
    },
    ss: {
        '1.16.1': schema.extend({
            entry: childSchema.ss['1.16.1'],
        }),
    },
};
