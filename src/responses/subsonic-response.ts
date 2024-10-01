import { z } from 'zod';

export const baseResponseOpenSubsonicSchema = z.object({
    openSubsonic: z.boolean().optional(),
    serverVersion: z.string().optional(),
    status: z.string(),
    type: z.string().optional(),
    version: z.string(),
});

export const baseResponseSchema = z.object({
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
