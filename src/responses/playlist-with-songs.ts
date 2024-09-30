import { z } from 'zod';
import { playlistSchema, songSchema } from '@/open-subsonic-types.js';

export const playlistWithSongsSchema = playlistSchema.extend({
    allowedUser: z.string().optional().describe('A list of allowed usernames'),
    changed: z.string(),
    comment: z.string().optional(),
    coverArt: z.string().optional(),
    created: z.string(),
    duration: z.number(),
    entry: songSchema.array().optional(),
    id: z.string(),
    name: z.string(),
    owner: z.string().optional(),
    public: z.boolean().optional(),
    songCount: z.number(),
});
