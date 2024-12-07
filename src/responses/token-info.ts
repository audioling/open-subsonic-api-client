import { z } from 'zod';

const schema = z.object({
    tokenInfo: z.object({
        username: z.string(),
    }),
});

export const tokenInfoSchema = {
    os: {
        '1': schema,
    },
};
