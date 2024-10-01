import { z } from 'zod';
import { artistId3Schema } from '@/responses/artist-id3.js';

export const indexId3Schema = {
    os: {
        '1': z.object({
            artist: artistId3Schema.os['1'].array().optional(),
            name: z.string(),
        }),
    },
    ss: {
        '1.16.1': z.object({
            artist: artistId3Schema.ss['1.16.1'].array().optional(),
            name: z.string(),
        }),
    },
};
