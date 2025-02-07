import { z } from 'zod';

// 0	A generic error.
// 10	Required parameter is missing.
// 20	Incompatible Subsonic REST protocol version. Client must upgrade.
// 30	Incompatible Subsonic REST protocol version. Server must upgrade.
// 40	Wrong username or password.
// 41	Token authentication not supported for LDAP users.
// 50	User is not authorized for the given operation.
// 60	The trial period for the Subsonic server is over. Please upgrade to Subsonic Premium. Visit subsonic.org for details.
// 70	The requested data was not found.

export const errorSchema = {
    ss: {
        '1.16.1': z.object({
            code: z.number().describe('The error code'),
            helpUrl: z
                .string()
                .optional()
                .describe(
                    'A URL (documentation, configuration, etc) which may provide additional context for the error)',
                ),
            message: z.string().optional().describe('The optional error message'),
        }),
    },
};
