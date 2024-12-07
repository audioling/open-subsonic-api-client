import { z } from 'zod';
import { errorSchema } from '@/responses/error.js';

export const baseResponseOpenSubsonicSchema = z.object({
    error: errorSchema.ss['1.16.1'].optional(),
    openSubsonic: z.boolean(),
    serverVersion: z.string(),
    status: z.string(),
    type: z.string(),
    version: z.string(),
});

export const baseResponseSchema = z.object({
    error: errorSchema.ss['1.16.1'].optional(),
    status: z.string(),
    version: z.string(),
});

export const subsonicResponseSchema = {
    os: {
        '1': z.object({
            'subsonic-response': baseResponseOpenSubsonicSchema,
        }),
    },
    ss: {
        '1.16.1': z.object({
            'subsonic-response': baseResponseSchema,
        }),
    },
};
