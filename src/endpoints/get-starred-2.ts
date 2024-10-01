import { z } from 'zod';
import { starred2Schema } from '@/responses/starred-2.js';
import { createEndpoint } from '@/utils.js';

export const getStarred2 = createEndpoint(
    {
        path: 'getStarred2.view',
        request: {
            default: z.object({
                musicFolderId: z.string().optional(),
            }),
        },
        response: {
            default: z.object({
                starred2: starred2Schema.ss['1.16.1'],
            }),
            os: {
                '1': z.object({
                    starred2: starred2Schema.os['1'],
                }),
            },
        },
        summary: 'Returns starred songs, albums and artists.',
    },
    {
        os: { '1': true },
        ss: { '1.16.1': true },
    },
);
