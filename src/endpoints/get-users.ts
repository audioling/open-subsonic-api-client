import { z } from 'zod';
import { emptyRequestSchema } from '@/open-subsonic-types.js';
import { usersSchema } from '@/responses/users.js';
import { createEndpoint } from '@/utils.js';

export const getUsers = createEndpoint(
    {
        path: 'getUsers.view',
        request: { default: emptyRequestSchema },
        response: {
            default: z.object({
                users: usersSchema.ss['1.16.1'],
            }),
        },
        summary:
            'Get details about all users, including which authorization roles and folder access they have. Only users with admin privileges are allowed to call this method.',
    },
    {
        os: { '1': true },
        ss: { '1.16.1': true },
    },
);
