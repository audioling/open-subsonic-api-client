import { albumId3Schema } from '@/responses/album-id3.js';
import { childSchema } from '@/responses/child.js';

export const albumId3WithSongSchema = albumId3Schema.extend({
    song: childSchema.array().optional(),
});
