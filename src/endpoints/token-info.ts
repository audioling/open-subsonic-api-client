import { z } from 'zod';
import { emptyRequestSchema } from '@/open-subsonic-types.js';
import { tokenInfoSchema } from '@/responses/token-info.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: 'tokenInfo.view',
    summary: 'Returns information about an API key.',
});

export const tokenInfo = {
    ...createEndpoint.os('OS.1', {
        request: emptyRequestSchema,
        response: z.object({
            tokenInfo: tokenInfoSchema.os['1'],
        }),
        ...properties,
    }),
};
