import { z } from 'zod';

const baseResponseOpenSubsonicSchema = z.object({
    openSubsonic: z.boolean(),
    serverVersion: z.string(),
    type: z.string(),
});

export const baseResponseSchema = z
    .object({
        status: z.string(),
        version: z.string(),
    })
    .merge(baseResponseOpenSubsonicSchema);

export const subsonicResponseSchema = z.object({
    'subsonic-response': baseResponseSchema,
});
