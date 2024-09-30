import { z } from 'zod';
import { albumId3Schema } from '@/responses/album-id3.js';

export const artistSchema = z.object({
    album: albumId3Schema.array().optional(),
    artistImageUrl: z.string().optional(),
    averageRating: z.number().optional(),
    id: z.string(),
    name: z.string(),
    starred: z.string().optional(),
    userRating: z.number().optional(),
});
