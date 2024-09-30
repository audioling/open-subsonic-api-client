import { z } from 'zod';
import { childSchema } from '@/responses/child.js';

export const similarSongsSchema = z.object({
    song: childSchema.array().optional(),
});
