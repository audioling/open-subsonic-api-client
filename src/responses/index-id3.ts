import { z } from 'zod';
import { artistId3Schema } from '@/responses/artist-id3.js';

export const indexId3Schema = z.object({
    artist: artistId3Schema.array().optional(),
    name: z.string(),
});
