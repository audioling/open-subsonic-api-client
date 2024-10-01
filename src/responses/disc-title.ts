import { z } from 'zod';

export const discTitleSchema = {
    os: {
        '1': z.object({
            disc: z.number(),
            title: z.string(),
        }),
    },
};
