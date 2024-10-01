import { z } from 'zod';
import { emptyRequestSchema } from '@/open-subsonic-types.js';
import { openSubsonicExtensionSchema } from '@/responses/open-subsonic-extension.js';
import { createEndpoint } from '@/utils.js';

export const getOpenSubsonicExtensions = createEndpoint(
    {
        path: 'getOpenSubsonicExtensions.view',
        request: { default: emptyRequestSchema },
        response: {
            default: z.object({
                openSubsonicExtensions: openSubsonicExtensionSchema.os['1'].array(),
            }),
        },
        summary: 'List the OpenSubsonic extensions supported by this server.',
    },
    {
        os: { '1': true },
        ss: { '1.16.1': false },
    },
);
