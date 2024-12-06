import { z } from 'zod';
import { emptyRequestSchema } from '@/open-subsonic-types.js';
import { openSubsonicExtensionSchema } from '@/responses/open-subsonic-extension.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: '/getOpenSubsonicExtensions.view',
    summary: 'List the OpenSubsonic extensions supported by this server.',
});

export const getOpenSubsonicExtensions = {
    ...createEndpoint.os('OS.1', {
        request: emptyRequestSchema,
        response: z.object({
            openSubsonicExtensions: openSubsonicExtensionSchema.os['1'].array(),
        }),
        ...properties,
    }),
};
