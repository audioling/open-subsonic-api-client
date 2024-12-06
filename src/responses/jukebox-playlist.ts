import { z } from 'zod';
import { childSchema } from '@/responses/child.js';

export const jukeboxPlaylistSchema = {
    ss: {
        '1.16.1': z.object({
            entry: childSchema.ss['1.16.1'].array(),
        }),
    },
};
