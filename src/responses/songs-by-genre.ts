import { z } from 'zod';
import { childSchema } from '@/responses/child.js';

export const songsByGenreSchema = {
    os: {
        '1': z.object({
            songsByGenre: childSchema.os['1'].array().optional(),
        }),
    },
    ss: {
        '1.16.1': z.object({
            songsByGenre: childSchema.ss['1.16.1'].array().optional(),
        }),
    },
};