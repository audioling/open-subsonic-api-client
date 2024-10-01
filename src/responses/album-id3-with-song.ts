import { albumId3Schema } from '@/responses/album-id3.js';
import { childSchema } from '@/responses/child.js';

export const albumId3WithSongSchema = {
    ss: {
        '1.16.1': albumId3Schema.ss['1.16.1'].extend({
            song: childSchema.ss['1.16.1'].array().optional(),
        }),
    },
};
