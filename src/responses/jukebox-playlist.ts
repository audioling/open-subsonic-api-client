import { z } from 'zod';
import { childSchema } from '@/responses/child.js';

export const jukeboxPlaylistSchema = {
    ss: {
        '1.16.1': z.object({
            currentIndex: z.number().describe('The current index of the song being played'),
            entry: childSchema.ss['1.16.1'].array().optional(),
            gain: z.number().describe('Volume, in a range of [0.0, 1.0]'),
            playing: z.boolean().describe('Whether the queue is currently playing'),
            position: z
                .number()
                .optional()
                .describe('The current position of the track in seconds'),
        }),
    },
};
