import { z } from 'zod';
import { childSchema } from '@/responses/child.js';

export const nowPlayingEntrySchema = childSchema.extend({
    minutesAgo: z.number(),
    playerId: z.number(),
    playerName: z.string(),
    username: z.string(),
});
