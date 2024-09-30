import { z } from 'zod';
import { playlistSchema } from '@/open-subsonic-types.js';

export const playlistsSchema = z.object({
    playlist: playlistSchema.array(),
});
