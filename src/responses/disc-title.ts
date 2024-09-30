import { z } from 'zod';

const discTitleOpenSubsonicSchema = z.object({
    disc: z.number(),
    title: z.string(),
});

export const discTitleSchema = z.object({}).merge(discTitleOpenSubsonicSchema);
