import { z } from 'zod';

export const scanStatusSchema = z.object({
    count: z.number().optional(),
    scanning: z.boolean(),
});
