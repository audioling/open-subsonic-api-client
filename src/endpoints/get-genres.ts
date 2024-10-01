import { z } from 'zod';
import { emptyRequestSchema } from '@/open-subsonic-types.js';
import { genresSchema } from '@/responses/genres.js';
import { createEndpoint } from '@/utils.js';

export const getGenres = createEndpoint(
    {
        path: 'getGenres.view',
        request: { default: emptyRequestSchema },
        response: {
            default: z.object({
                genres: genresSchema.ss['1.16.1'],
            }),
        },
        summary: 'Returns all genres.',
    },
    {
        os: { '1': true },
        ss: { '1.16.1': true },
    },
);
