import { z } from 'zod';

const schema = z.object({
    currentIndex: z.number(),
    gain: z.number(),
    playing: z.boolean(),
    position: z.number().optional(),
});

export const jukeboxStatusSchema = {
    ss: {
        '1.16.1': schema,
    },
};
