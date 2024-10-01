import { z } from 'zod';
import { scanStatusSchema } from '@/responses/scan-status.js';
import { createEndpoint } from '@/utils.js';

export const startScan = createEndpoint(
    {
        path: 'startScan.view',
        request: { default: z.object({}) },
        response: {
            default: scanStatusSchema.ss['1.16.1'],
        },
        summary: 'Initiates a rescan of the media libraries.',
    },
    {
        os: { '1': true },
        ss: { '1.16.1': true },
    },
);
