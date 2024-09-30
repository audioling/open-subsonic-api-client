import { z } from 'zod';

const itemDateOpenSubsonicSchema = z.object({
    day: z.number().optional(),
    month: z.number().optional(),
    year: z.number().optional(),
});

export const itemDateSchema = z.object({}).merge(itemDateOpenSubsonicSchema);
