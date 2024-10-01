import { z } from 'zod';

export const itemDateSchema = {
    os: {
        '1': z.object({
            day: z.number().optional(),
            month: z.number().optional(),
            year: z.number().optional(),
        }),
    },
};
