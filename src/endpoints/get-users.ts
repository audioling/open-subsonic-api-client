import { z } from 'zod';
import { emptyRequestSchema } from '@/open-subsonic-types.js';
import { usersSchema } from '@/responses/users.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: 'getUsers.view',
    summary:
        'Get details about all users, including which authorization roles and folder access they have. Only users with admin privileges are allowed to call this method.',
});

export const getUsers = {
    ...createEndpoint.ss('SS.1.16.1', {
        request: emptyRequestSchema,
        response: z.object({
            users: usersSchema.ss['1.16.1'],
        }),
        ...properties,
    }),
    ...createEndpoint.os('OS.1', {
        request: emptyRequestSchema,
        response: z.object({
            users: usersSchema.ss['1.16.1'],
        }),
        ...properties,
    }),
};
