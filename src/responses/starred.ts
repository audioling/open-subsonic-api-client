import { z } from 'zod';
import { artistSchema } from '@/responses/artist.js';
import { childSchema } from '@/responses/child.js';

export const starredSchema = {
    os: {
        '1': z.object({
            album: childSchema.os['1'].array().optional(),
            artist: artistSchema.os['1'].array().optional(),
            song: childSchema.os['1'].array().optional(),
        }),
    },
    ss: {
        '1.16.1': z.object({
            album: childSchema.ss['1.16.1'].array().optional(),
            artist: artistSchema.ss['1.16.1'].array().optional(),
            song: childSchema.ss['1.16.1'].array().optional(),
        }),
    },
};
