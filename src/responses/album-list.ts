import { z } from 'zod';
import { childSchema } from '@/responses/child.js';

export const albumListSchema = {
    os: {
        '1': z.object({
            album: childSchema.os['1'].array().optional(),
        }),
    },
    ss: {
        '1.16.1': z.object({
            album: childSchema.ss['1.16.1'].array().optional(),
        }),
    },
};
