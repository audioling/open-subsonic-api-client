import { z } from 'zod';

const schema = z.object({
    name: z.string(),
});

export const recordLabelSchema = {
    os: {
        '1': schema,
    },
};
