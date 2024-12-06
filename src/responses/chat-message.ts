import { z } from 'zod';

const schema = z.object({
    message: z.string(),
    time: z.number(),
    username: z.string(),
});

export const chatMessageSchema = {
    ss: {
        '1.16.1': schema,
    },
};
