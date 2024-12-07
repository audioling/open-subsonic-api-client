import { z } from 'zod';

const schema = z.object({
    album: z.string(),
    bitRate: z.number(),
    contentType: z.string(),
    converArt: z.string(),
    created: z.string(),
    duration: z.number(),
    id: z.string(),
    isDir: z.boolean(),
    isVideo: z.boolean(),
    parent: z.string(),
    path: z.string(),
    size: z.number(),
    suffix: z.string(),
    title: z.string(),
    transcodedContentType: z.string(),
    transcodedSuffix: z.string(),
});

export const videosSchema = {
    ss: {
        '1.16.1': z.object({
            video: schema.array().optional(),
        }),
    },
};
