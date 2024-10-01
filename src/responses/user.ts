import { z } from 'zod';

export const userSchema = {
    ss: {
        '1.16.1': z.object({
            adminRole: z.boolean(),
            commentRole: z.boolean(),
            coverArtRole: z.boolean(),
            downloadRole: z.boolean(),
            email: z.string().optional(),
            folder: z.string().array(),
            playlistRole: z.boolean(),
            podcastRole: z.boolean(),
            scrobblingEnabled: z.boolean(),
            settingsRole: z.boolean(),
            shareRole: z.boolean(),
            streamRole: z.boolean(),
            uploadRole: z.boolean(),
            username: z.string(),
        }),
    },
};
