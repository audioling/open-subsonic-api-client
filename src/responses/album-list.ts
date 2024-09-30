import { z } from 'zod';
import { childSchema } from '@/responses/child.js';

export const albumListSchema = z.object({
    album: childSchema.array().optional(),
});
