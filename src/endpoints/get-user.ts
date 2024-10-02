import { z } from 'zod';
import { emptyRequestSchema } from '@/open-subsonic-types.js';
import { userSchema } from '@/responses/user.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: 'getUser.view',
    summary:
        'Get details about a given user, including which authorization roles and folder access it has. Can be used to enable/disable certain features in the client, such as jukebox control.',
});

export const getUser = {
    ...createEndpoint.ss('SS.1.16.1', {
        request: emptyRequestSchema,
        response: z.object({
            user: userSchema.ss['1.16.1'],
        }),
        ...properties,
    }),
    ...createEndpoint.os('OS.1', {
        request: emptyRequestSchema,
        response: z.object({
            user: userSchema.ss['1.16.1'],
        }),
        ...properties,
    }),
};
