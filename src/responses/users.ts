import { z } from 'zod';
import { userSchema } from '@/open-subsonic-types.js';

export const usersSchema = z.object({
    user: userSchema.array(),
});
