import { z } from 'zod';
import { childSchema } from '@/responses/child.js';

export const nowPlayingEntrySchema = {
    os: {
        '1': childSchema.os['1'].extend({
            minutesAgo: z.number(),
            playerId: z.number(),
            playerName: z.string(),
            username: z.string(),
        }),
    },
    ss: {
        '1.16.1': childSchema.ss['1.16.1'].extend({
            minutesAgo: z.number(),
            playerId: z.number(),
            playerName: z.string(),
            username: z.string(),
        }),
    },
};
