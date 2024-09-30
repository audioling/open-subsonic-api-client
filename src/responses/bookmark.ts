import { z } from 'zod';
import { childSchema } from '@/responses/child.js';

export const bookmarkSchema = z.object({
    changed: z.string(),
    comment: z.string().optional(),
    created: z.string(),
    entry: childSchema,
    position: z.number(),
    username: z.string(),
});
