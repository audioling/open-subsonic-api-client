import { z } from 'zod';

const schema = z.object({
    video: z.object({
        audioTrack: z
            .object({
                id: z.string(),
                languageCode: z.string(),
                name: z.string(),
            })
            .array(),
        captions: z.object({
            id: z.string(),
            name: z.string(),
        }),
        conversion: z
            .object({
                bitRate: z.number(),
                id: z.string(),
            })
            .optional(),
        id: z.string(),
    }),
});

export const videoInfoSchema = {
    ss: {
        '1.16.1': schema,
    },
};
