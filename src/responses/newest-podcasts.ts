import { z } from 'zod';
import { podcastEpisodeSchema } from '@/responses/podcast-episode.js';

export const newestPodcastsSchema = {
    ss: {
        '1.16.1': z.object({
            episode: podcastEpisodeSchema.ss['1.16.1'].array().optional(),
        }),
    },
};
