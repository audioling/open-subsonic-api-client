import { z } from 'zod';
import { albumId3Schema } from '@/responses/album-id3.js';
import { artistId3Schema } from '@/responses/artist-id3.js';
import { childSchema } from '@/responses/child.js';

export const searchResult3Schema = z.object({
    album: albumId3Schema.array().optional(),
    artist: artistId3Schema.array().optional(),
    song: childSchema.array().optional(),
});
