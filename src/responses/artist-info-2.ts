import { z } from 'zod';
import { artistId3Schema } from '@/responses/artist-id3.js';

export const artistInfo2Schema = z.object({
    biography: z.string().optional(),
    largeImageUrl: z.string().optional(),
    lastFmUrl: z.string().optional(),
    mediumImageUrl: z.string().optional(),
    musicBrainzId: z.string().optional(),
    similarArtist: artistId3Schema.array().optional(),
    smallImageUrl: z.string().optional(),
});
