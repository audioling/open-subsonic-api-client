import { z } from 'zod';
import { nowPlayingEntrySchema } from '@/responses/now-playing-entry.js';

export const nowPlayingSchema = {
    os: {
        '1': z.object({
            entry: nowPlayingEntrySchema.os['1'].array(),
        }),
    },
    ss: {
        '1.16.1': z.object({
            entry: nowPlayingEntrySchema.ss['1.16.1'].array(),
        }),
    },
};
