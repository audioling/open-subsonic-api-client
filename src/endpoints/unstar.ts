import { z } from 'zod';
import { emptyResponseSchema } from '@/open-subsonic-types.js';
import { createEndpoint } from '@/utils.js';

export const unstar = createEndpoint(
    {
        path: '/unstar',
        request: {
            default: z.object({
                albumId: z.string().array().optional(),
                artistId: z.string().array().optional(),
                id: z.string().array().optional(),
            }),
        },
        response: { default: emptyResponseSchema },
        summary: 'Attaches a star to a song, album or artist.',
    },
    {
        os: { '1': true },
        ss: { '1.16.1': true },
    },
);
