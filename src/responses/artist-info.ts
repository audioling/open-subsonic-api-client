import { z } from 'zod';
import { artistId3Schema } from '@/responses/artist-id3.js';

export const artistInfoSchema = {
    os: {
        '1': z.object({
            biography: z.string().optional(),
            largeImageUrl: z.string().optional(),
            lastFmUrl: z.string().optional(),
            mediumImageUrl: z.string().optional(),
            musicBrainzId: z.string().optional(),
            similarArtist: artistId3Schema.os['1'].array().optional(),
        }),
    },
    ss: {
        '1.16.1': z.object({
            biography: z.string().optional(),
            largeImageUrl: z.string().optional(),
            lastFmUrl: z.string().optional(),
            mediumImageUrl: z.string().optional(),
            musicBrainzId: z.string().optional(),
            similarArtist: artistId3Schema.ss['1.16.1'].array().optional(),
        }),
    },
};
