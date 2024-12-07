import { z } from 'zod';

export const genreSchema = {
    ss: {
        '1.16.1': z.object({
            albumCount: z.number(),
            songCount: z.number(),
            value: z.string(),
        }),
    },
};
