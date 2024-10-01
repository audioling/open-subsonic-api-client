import { z } from 'zod';
import { albumId3Schema } from '@/responses/album-id3.js';
import { artistId3Schema } from '@/responses/artist-id3.js';
import { childSchema } from '@/responses/child.js';

export const starred2Schema = {
    os: {
        '1': z.object({
            album: albumId3Schema.os['1'].array().optional(),
            artist: artistId3Schema.os['1'].array().optional(),
            song: childSchema.os['1'].array().optional(),
        }),
    },
    ss: {
        '1.16.1': z.object({
            album: albumId3Schema.ss['1.16.1'].array().optional(),
            artist: artistId3Schema.ss['1.16.1'].array().optional(),
            song: childSchema.ss['1.16.1'].array().optional(),
        }),
    },
};
