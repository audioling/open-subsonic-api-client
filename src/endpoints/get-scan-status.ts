import { z } from 'zod';
import { emptyRequestSchema } from '@/open-subsonic-types.js';
import { scanStatusSchema } from '@/responses/scan-status.js';
import { createEndpoint } from '@/utils.js';

export const getScanStatus = createEndpoint(
    {
        path: 'getScanStatus.view',
        request: { default: emptyRequestSchema },
        response: {
            default: z.object({
                scanStatus: scanStatusSchema.ss['1.16.1'],
            }),
        },
    },
    {
        os: { '1': true },
        ss: { '1.16.1': true },
    },
);
