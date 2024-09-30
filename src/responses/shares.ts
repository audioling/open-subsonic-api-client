import { z } from 'zod';
import { shareSchema } from '@/responses/share.js';

export const sharesSchema = z.object({
    share: shareSchema.array(),
});
