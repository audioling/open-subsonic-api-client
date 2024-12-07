import { z } from 'zod';
import { childSchema } from '@/responses/child.js';
import { podcastStatusSchema } from '@/responses/podcast-status.js';

const schema = z.object({
    channelId: z.string(),
    description: z.string().optional(),
    publishDate: z.string().optional(),
    status: podcastStatusSchema.ss['1.16.1'],
    streamId: z.string().optional(),
});

export const podcastEpisodeSchema = {
    os: {
        '1': childSchema.os['1'].merge(schema),
    },
    ss: {
        '1.16.1': childSchema.ss['1.16.1'].merge(schema),
    },
};
