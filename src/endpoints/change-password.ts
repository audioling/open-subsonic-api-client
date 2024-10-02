import { z } from 'zod';
import { emptyResponseSchema } from '@/open-subsonic-types.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: 'changePassword.view',
    summary:
        'Changes the password of an existing user. You can only change your own password unless you have admin privileges.',
});

const requestSchema = z.object({
    password: z.string().describe('The name of the user which should change its password.'),
    username: z
        .string()
        .describe('The new password of the new user, either in clear text of hex-encoded.'),
});

export const changePassword = {
    ...createEndpoint.ss('SS.1.16.1', {
        request: requestSchema,
        response: emptyResponseSchema,
        ...properties,
    }),
    ...createEndpoint.os('OS.1', {
        request: requestSchema,
        response: emptyResponseSchema,
        ...properties,
    }),
};
