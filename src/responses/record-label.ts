import { z } from 'zod';

const recordLabelOpenSubsonicSchema = z.object({
    name: z.string(),
});

export const recordLabelSchema = z.object({}).merge(recordLabelOpenSubsonicSchema);
