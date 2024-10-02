import { z } from 'zod';
import { emptyRequestSchema } from '@/open-subsonic-types.js';
import { genresSchema } from '@/responses/genres.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: 'getGenres.view',
    summary: 'Returns all genres.',
});

export const getGenres = {
    ...createEndpoint.ss('SS.1.16.1', {
        request: emptyRequestSchema,
        response: z.object({
            genres: genresSchema.ss['1.16.1'],
        }),
        ...properties,
    }),
    ...createEndpoint.os('OS.1', {
        request: emptyRequestSchema,
        response: z.object({
            genres: genresSchema.ss['1.16.1'],
        }),
        ...properties,
    }),
};
