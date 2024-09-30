import { z } from 'zod';
import { albumId3Schema } from '@/responses/album-id3.js';

export const albumList2Schema = z.object({
    album: albumId3Schema.array().optional(),
});
