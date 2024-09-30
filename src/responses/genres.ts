import { z } from 'zod';
import { genreSchema } from '@/open-subsonic-types.js';

export const genresSchema = z.object({
    genre: genreSchema.array().optional(),
});
