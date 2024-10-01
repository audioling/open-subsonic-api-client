import { z } from 'zod';
import { emptyResponseSchema } from '@/open-subsonic-types.js';
import { createEndpoint } from '@/utils.js';

export const changePassword = createEndpoint(
    {
        path: 'changePassword.view',
        request: {
            default: z.object({
                password: z
                    .string()
                    .describe('The name of the user which should change its password.'),
                username: z
                    .string()
                    .describe(
                        'The new password of the new user, either in clear text of hex-encoded.',
                    ),
            }),
        },
        response: { default: emptyResponseSchema },
        summary:
            'Changes the password of an existing user. You can only change your own password unless you have admin privileges.',
    },
    {
        os: { '1': true },
        ss: { '1.16.1': true },
    },
);
