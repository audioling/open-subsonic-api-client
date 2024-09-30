import { z } from 'zod';
import { nowPlayingEntrySchema } from '@/responses/now-playing-entry.js';

export const nowPlayingSchema = z.object({
    entry: nowPlayingEntrySchema.array(),
});
