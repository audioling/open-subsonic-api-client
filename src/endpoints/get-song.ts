import { z } from 'zod';
import { childSchema } from '@/responses/child.js';
import { createEndpoint } from '@/utils.js';

export const getSong = createEndpoint(
    {
        path: 'getSong.view',
        request: {
            default: z.object({
                id: z.string(),
            }),
        },
        response: {
            default: z.object({
                song: childSchema.ss['1.16.1'],
            }),
            os: {
                '1': z.object({
                    song: childSchema.os['1'],
                }),
            },
        },
        summary: 'Returns details for a song.',
    },
    {
        os: { '1': true },
        ss: { '1.16.1': true },
    },
);
