import { z } from 'zod';
import { userSchema } from '@/responses/user.js';

export const usersSchema = {
    ss: {
        '1.16.1': z.object({
            user: userSchema.ss['1.16.1'].array(),
        }),
    },
};
