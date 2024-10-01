import { z } from 'zod';
import { emptyResponseSchema } from '@/open-subsonic-types.js';
import { createEndpoint } from '@/utils.js';

export const createPlaylist = createEndpoint(
    {
        path: 'createPlaylist.view',
        request: {
            default: z.object({
                name: z.string().optional(),
                playlistId: z.string().optional(),
                songId: z.string().array(),
            }),
        },
        response: { default: emptyResponseSchema },
        summary: 'Creates (or updates) a playlist.',
    },
    {
        os: { '1': true },
        ss: { '1.16.1': true },
    },
);
