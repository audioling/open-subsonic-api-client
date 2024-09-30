import { z } from 'zod';
import { childSchema } from '@/responses/child.js';

export const similarSongs2Schema = z.object({
    song: childSchema.array().optional(),
});
