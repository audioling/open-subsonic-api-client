import { z } from 'zod';

export const genreSchema = {
    ss: {
        '1.16.1': z.object({
            albumCount: z.number().optional(),
            songCount: z.number().optional(),
            value: z.string(),
        }),
    },
};
