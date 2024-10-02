import { z } from 'zod';
import { scanStatusSchema } from '@/responses/scan-status.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: 'startScan.view',
    summary: 'Initiates a rescan of the media libraries.',
});

export const startScan = {
    ...createEndpoint.ss('SS.1.16.1', {
        request: z.object({}),
        response: z.object({ scanStatus: scanStatusSchema.ss['1.16.1'] }),
        ...properties,
    }),
    ...createEndpoint.os('OS.1', {
        request: z.object({}),
        response: z.object({ scanStatus: scanStatusSchema.ss['1.16.1'] }),
        ...properties,
    }),
};
