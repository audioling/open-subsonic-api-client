import { z } from 'zod';
import { emptyResponseSchema } from '@/open-subsonic-types.js';
import { createEndpoint } from '@/utils.js';

export const setRating = createEndpoint(
    {
        path: 'setRating.view',
        request: {
            default: z.object({
                id: z.string(),
                rating: z.number().int().min(0).max(5).describe('The rating from 0 to 5'),
            }),
        },
        response: { default: emptyResponseSchema },
        summary: 'Sets the rating for an item.',
    },
    {
        os: { '1': true },
        ss: { '1.16.1': true },
    },
);
