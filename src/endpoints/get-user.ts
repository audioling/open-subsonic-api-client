import { z } from 'zod';
import { emptyRequestSchema } from '@/open-subsonic-types.js';
import { userSchema } from '@/responses/user.js';
import { createEndpoint } from '@/utils.js';

export const getUser = createEndpoint(
    {
        path: 'getUser.view',
        request: { default: emptyRequestSchema },
        response: {
            default: z.object({
                user: userSchema.ss['1.16.1'],
            }),
        },
        summary:
            'Get details about a given user, including which authorization roles and folder access it has. Can be used to enable/disable certain features in the client, such as jukebox control.',
    },
    {
        os: { '1': true },
        ss: { '1.16.1': true },
    },
);
