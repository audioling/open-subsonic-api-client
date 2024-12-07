import { z } from 'zod';

export const itemGenreSchema = {
    os: {
        '1': z.object({
            name: z.string(),
        }),
    },
};
