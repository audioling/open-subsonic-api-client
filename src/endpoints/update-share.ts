import { z } from 'zod';
import { emptyResponseSchema } from '@/open-subsonic-types.js';
import { createEndpoint } from '@/utils.js';

export const updateShare = createEndpoint(
    {
        path: 'updateShare.view',
        request: {
            default: z.object({
                description: z.string().optional(),
                expires: z
                    .string()
                    .optional()
                    .describe(
                        'The time at which the share expires. Given as milliseconds since 1970.',
                    ),
                id: z.string().describe('ID of the share to update.'),
            }),
        },
        response: { default: emptyResponseSchema },
        summary: 'Updates the description and/or expiration date for an existing share.',
    },
    {
        os: { '1': true },
        ss: { '1.16.1': true },
    },
);
