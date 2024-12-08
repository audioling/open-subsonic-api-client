import { z } from 'zod';

const schema = z.object({
    adminRole: z.boolean(),
    avatarLastChanged: z.string().optional(),
    commentRole: z.boolean(),
    coverArtRole: z.boolean(),
    downloadRole: z.boolean(),
    email: z.string().optional(),
    folder: z.number().array(),
    jukeboxRole: z.boolean(),
    maxBitRate: z.number().optional(),
    playlistRole: z.boolean(),
    podcastRole: z.boolean(),
    scrobblingEnabled: z.boolean(),
    settingsRole: z.boolean(),
    shareRole: z.boolean(),
    streamRole: z.boolean(),
    uploadRole: z.boolean(),
    username: z.string(),
    videoConversionRole: z.boolean(),
});

export const userSchema = {
    ss: {
        '1.16.1': schema,
    },
};
