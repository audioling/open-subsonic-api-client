import { z } from 'zod';

export const scanStatusSchema = {
    ss: {
        '1.16.1': z.object({
            count: z.number().optional(),
            scanning: z.boolean(),
        }),
    },
};
