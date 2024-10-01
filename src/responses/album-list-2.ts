import { z } from 'zod';
import { albumId3Schema } from '@/responses/album-id3.js';

export const albumList2Schema = {
    os: {
        '1': z.object({
            album: albumId3Schema.os['1'].array().optional(),
        }),
    },
    ss: {
        '1.16.1': z.object({
            album: albumId3Schema.ss['1.16.1'].array().optional(),
        }),
    },
};
