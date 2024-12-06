import { z } from 'zod';

const schema = z.object({
    episode: z
        .object({
            album: z.string(),
            artist: z.string(),
            artistId: z.string(),
            bitRate: z.number(),
            channelId: z.string(),
            contentType: z.string(),
            coverArt: z.string(),
            created: z.string(),
            description: z.string(),
            duration: z.number(),
            id: z.string(),
            isDir: z.boolean(),
            isVideo: z.boolean(),
            parent: z.string(),
            publishDate: z.string(),
            size: z.number(),
            status: z.string(),
            streamId: z.string(),
            suffix: z.string(),
            title: z.string(),
            type: z.string(),
            year: z.number(),
        })
        .array(),
});

export const newestPodcastsSchema = {
    ss: {
        '1.16.1': schema,
    },
};
