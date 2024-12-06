import { z } from 'zod';
import { emptyRequestSchema } from '@/open-subsonic-types.js';
import { childSchema } from '@/responses/child.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: '/getPlayQueue.view',
    summary: 'Returns the state of the play queue for this user.',
});

export const getPlayQueue = {
    ...createEndpoint.ss('SS.1.16.1', {
        request: emptyRequestSchema,
        response: z.object({
            playQueue: z.object({
                entry: z.array(childSchema.ss['1.16.1']),
            }),
        }),
        ...properties,
    }),
    ...createEndpoint.os('OS.1', {
        request: emptyRequestSchema,
        response: z.object({
            playQueue: z.object({
                entry: z.array(childSchema.os['1']),
            }),
        }),
        ...properties,
    }),
};
