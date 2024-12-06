import { z } from 'zod';

export const tokenInfoSchema = {
    os: {
        '1': z.object({
            username: z.string(),
        }),
    },
};
