import { albumId3Schema } from '@/responses/album-id3.js';
import { childSchema } from '@/responses/child.js';

export const albumId3WithSongSchema = {
    os: {
        '1': albumId3Schema.os['1'].extend({
            song: childSchema.os['1'].array().optional(),
        }),
    },
    ss: {
        '1.16.1': albumId3Schema.ss['1.16.1'].extend({
            song: childSchema.ss['1.16.1'].array().optional(),
        }),
    },
};
