import { z } from 'zod';
import { childSchema } from '@/responses/child.js';

export const directorySchema = z.object({
    averageRating: z.number().optional(),
    child: childSchema.array().optional(),
    id: z.string(),
    name: z.string(),
    parent: z.string().optional(),
    playCount: z.number().optional(),
    starred: z.string().optional(),
    userRating: z.number().optional(),
});
