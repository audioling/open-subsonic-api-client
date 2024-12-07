import { z } from 'zod';
import { podcastChannelSchema } from '@/responses/podcast-channel.js';

export const podcastsSchema = {
    os: {
        '1': z.object({
            channel: podcastChannelSchema.os['1'].optional(),
        }),
    },
    ss: {
        '1.16.1': z.object({
            channel: podcastChannelSchema.ss['1.16.1'].optional(),
        }),
    },
};
