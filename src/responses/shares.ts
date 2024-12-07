import { z } from 'zod';
import { shareSchema } from '@/responses/share.js';

export const sharesSchema = {
    os: {
        '1': z.object({
            share: shareSchema.os['1'].array().optional(),
        }),
    },
    ss: {
        '1.16.1': z.object({
            share: shareSchema.ss['1.16.1'].array().optional(),
        }),
    },
};
