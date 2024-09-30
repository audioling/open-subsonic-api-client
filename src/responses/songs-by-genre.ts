import { z } from 'zod';
import { childSchema } from '@/responses/child.js';

export const songsByGenreSchema = z.object({
    songsByGenre: childSchema.array().optional(),
});
