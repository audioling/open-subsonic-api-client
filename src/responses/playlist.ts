import { z } from 'zod';

export const playlistSchema = {
    ss: {
        '1.16.1': z.object({
            allowedUser: z.string().optional().describe('A list of allowed usernames'),
            changed: z.string(),
            comment: z.string().optional(),
            coverArt: z.string().optional(),
            created: z.string(),
            duration: z.number(),
            id: z.string(),
            name: z.string(),
            owner: z.string().optional(),
            public: z.boolean().optional(),
            songCount: z.number(),
        }),
    },
};
