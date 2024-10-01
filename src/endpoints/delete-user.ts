import { z } from 'zod';
import { emptyResponseSchema } from '@/open-subsonic-types.js';
import { createEndpoint } from '@/utils.js';

export const deleteUser = createEndpoint(
    {
        path: 'deleteUser.view',
        request: {
            default: z.object({
                username: z.string(),
            }),
        },
        response: { default: emptyResponseSchema },
        summary: 'Deletes an existing user.',
    },
    {
        os: { '1': true },
        ss: { '1.16.1': true },
    },
);
