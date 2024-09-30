import { z } from 'zod';
import { childSchema } from '@/responses/child.js';

export const shareSchema = z.object({
    created: z.string(),
    description: z.string().optional(),
    entry: childSchema.array().optional(),
    expires: z.string().optional(),
    id: z.string(),
    lastVisited: z.string().optional(),
    url: z.string(),
    username: z.string(),
    visitCount: z.number(),
});
