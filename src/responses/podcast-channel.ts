import { z } from 'zod';
import { podcastEpisodeSchema } from '@/responses/podcast-episode.js';
import { podcastStatusSchema } from '@/responses/podcast-status.js';

const schema = z.object({
    coverArt: z.string().optional(),
    description: z.string().optional(),
    errorMessage: z.string().optional(),
    id: z.string(),
    originalImageUrl: z.string().optional(),
    title: z.string().optional(),
    url: z.string(),
});

export const podcastChannelSchema = {
    os: {
        '1': schema.extend({
            episode: podcastEpisodeSchema.os['1'].array(),
            status: podcastStatusSchema.ss['1.16.1'].optional(),
        }),
    },
    ss: {
        '1.16.1': schema.extend({
            episode: podcastEpisodeSchema.ss['1.16.1'].array(),
            status: podcastStatusSchema.ss['1.16.1'].optional(),
        }),
    },
};
