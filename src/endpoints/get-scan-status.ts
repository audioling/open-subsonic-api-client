import { z } from 'zod';
import { emptyRequestSchema } from '@/open-subsonic-types.js';
import { scanStatusSchema } from '@/responses/scan-status.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: 'getScanStatus.view',
    summary: 'Returns the current status of the music scanner.',
});

export const getScanStatus = {
    ...createEndpoint.ss('SS.1.16.1', {
        request: emptyRequestSchema,
        response: z.object({
            scanStatus: scanStatusSchema.ss['1.16.1'],
        }),
        ...properties,
    }),
    ...createEndpoint.os('OS.1', {
        request: emptyRequestSchema,
        response: z.object({
            scanStatus: scanStatusSchema.ss['1.16.1'],
        }),
        ...properties,
    }),
};
