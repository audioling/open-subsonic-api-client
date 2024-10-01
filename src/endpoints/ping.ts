import { z } from 'zod';
import { emptyResponseSchema } from '@/open-subsonic-types.js';
import { createEndpoint } from '@/utils.js';

export const ping = createEndpoint(
    {
        path: 'ping.view',
        request: {
            default: z.object({
                c: z.string(),
                f: z.string(),
                p: z.string().optional(),
                s: z.string().optional(),
                t: z.string().optional(),
                u: z.string().optional(),
                v: z.string(),
            }),
        },
        response: {
            default: emptyResponseSchema,
        },
    },
    {
        os: { '1': true },
        ss: { '1.16.1': true },
    },
);
