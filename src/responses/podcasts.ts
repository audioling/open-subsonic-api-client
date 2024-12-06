import { z } from 'zod';

const schema = z.object({
    channel: z.object({
        coverArt: z.string(),
        description: z.string(),
        episode: z
            .object({
                bitRate: z.number(),
                channelId: z.string(),
                contentType: z.string(),
                coverArt: z.string(),
                description: z.string(),
                duration: z.number(),
                genre: z.string(),
                id: z.string(),
                isDir: z.boolean(),
                parent: z.string(),
                path: z.string(),
                publishDate: z.string(),
                size: z.number(),
                status: z.string(),
                streamId: z.string(),
                title: z.string(),
                year: z.number(),
            })
            .array(),
        id: z.string(),
        title: z.string(),
        url: z.string(),
    }),
});

export const podcastsSchema = {
    ss: {
        '1.16.1': schema,
    },
};
