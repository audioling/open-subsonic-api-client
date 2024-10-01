import { z } from 'zod';
import { genreSchema } from '@/responses/genre.js';

export const genresSchema = {
    ss: {
        '1.16.1': z.object({
            genre: genreSchema.ss['1.16.1'].array().optional(),
        }),
    },
};
