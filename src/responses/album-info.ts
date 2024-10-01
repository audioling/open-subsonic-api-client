import { z } from 'zod';

export const albumInfoSchema = {
    ss: {
        '1.16.1': z.object({
            largeImageUrl: z.string().optional(),
            lastFmUrl: z.string().optional(),
            mediumImageUrl: z.string().optional(),
            musicBrainzId: z.string().optional(),
            notes: z.string().optional(),
            smallImageUrl: z.string().optional(),
        }),
    },
};
