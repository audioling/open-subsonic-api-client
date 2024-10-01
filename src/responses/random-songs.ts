import { z } from 'zod';
import { childSchema } from '@/responses/child.js';

export const randomSongsSchema = {
    os: {
        '1': z.object({
            song: childSchema.os['1'].array().optional(),
        }),
    },
    ss: {
        '1.16.1': z.object({
            song: childSchema.ss['1.16.1'].array().optional(),
        }),
    },
};
