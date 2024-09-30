import { z } from 'zod';
import { childSchema } from '@/responses/child.js';

export const randomSongsSchema = z.object({
    song: childSchema.array().optional(),
});
