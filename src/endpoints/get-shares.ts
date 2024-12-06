import { z } from 'zod';
import { emptyRequestSchema } from '@/open-subsonic-types.js';
import { sharesSchema } from '@/responses/shares.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: 'getShares.view',
    summary: 'Returns information about shared media this user is allowed to manage.',
});

export const getShares = {
    ...createEndpoint.ss('SS.1.16.1', {
        request: emptyRequestSchema,
        response: z.object({
            shares: sharesSchema.ss['1.16.1'],
        }),
        ...properties,
    }),
    ...createEndpoint.os('OS.1', {
        request: emptyRequestSchema,
        response: z.object({
            shares: sharesSchema.ss['1.16.1'],
        }),
        ...properties,
    }),
};
