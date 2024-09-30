import { z } from 'zod';

export const itemGenreOpenSubsonicSchema = z.object({
    genre: z.string(),
});

export const itemGenreSchema = z.object({}).merge(itemGenreOpenSubsonicSchema);
