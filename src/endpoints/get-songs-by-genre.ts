import { z } from 'zod';
import { songsByGenreSchema } from '@/responses/songs-by-genre.js';
import { createEndpoint } from '@/utils.js';

export const getSongsByGenre = createEndpoint(
    {
        path: 'getSongsByGenre.view',
        request: {
            default: z.object({
                count: z.number().optional(),
                genre: z.string(),
                musicFolderId: z.string().optional(),
                offset: z.number().optional(),
            }),
        },
        response: {
            default: z.object({
                songs: songsByGenreSchema.ss['1.16.1'],
            }),
            os: {
                '1': z.object({
                    songs: songsByGenreSchema.os['1'],
                }),
            },
        },
    },
    {
        os: { '1': true },
        ss: { '1.16.1': true },
    },
);
