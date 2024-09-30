import { z } from 'zod';

export const genreSchema = z.object({
    albumCount: z.number().optional(),
    songCount: z.number().optional(),
    value: z.string(),
});
