import { z } from 'zod';
import { playlistSchema } from '@/responses/playlist.js';

export const playlistsSchema = {
    ss: {
        '1.16.1': z.object({
            playlist: playlistSchema.ss['1.16.1'].array().optional(),
        }),
    },
};
