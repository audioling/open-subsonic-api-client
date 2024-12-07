import { z } from 'zod';
import { childSchema } from '@/responses/child.js';

const schema = z.object({
    changed: z.string().describe('Date modified [ISO 8601]'),
    changedBy: z.string().describe('Name of client app'),
    current: z.string().optional(),
    id: z.string().array(),
    position: z.number().optional(),
    username: z.string(),
});

export const playQueueSchema = {
    os: {
        '1': schema.extend({
            entry: childSchema.os['1'].array().optional(),
        }),
    },
    ss: {
        '1.16.1': schema.extend({
            entry: childSchema.ss['1.16.1'].array().optional(),
        }),
    },
};
