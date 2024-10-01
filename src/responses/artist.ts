import { z } from 'zod';
import { albumId3Schema } from '@/responses/album-id3.js';

const schema = z.object({
    artistImageUrl: z.string().optional(),
    averageRating: z.number().optional(),
    id: z.string(),
    name: z.string(),
    starred: z.string().optional(),
    userRating: z.number().optional(),
});

export const artistSchema = {
    os: {
        '1': schema.extend({
            album: albumId3Schema.os['1'].array().optional(),
        }),
    },
    ss: {
        '1.16.1': schema.extend({
            album: albumId3Schema.ss['1.16.1'].array().optional(),
        }),
    },
};
