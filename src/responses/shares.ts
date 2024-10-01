import { z } from 'zod';
import { shareSchema } from '@/responses/share.js';

export const sharesSchema = {
    ss: {
        '1.16.1': z.object({
            share: shareSchema.ss['1.16.1'].array(),
        }),
    },
};
