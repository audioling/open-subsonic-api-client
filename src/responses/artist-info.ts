import { z } from 'zod';
import { artistSchema } from '@/open-subsonic-types.js';

export const artistInfoSchema = z.object({
    biography: z.string().optional(),
    largeImageUrl: z.string().optional(),
    lastFmUrl: z.string().optional(),
    mediumImageUrl: z.string().optional(),
    musicBrainzId: z.string().optional(),
    similarArtist: artistSchema.array().optional(),
    smallImageUrl: z.string().optional(),
});
