import { z } from 'zod';
import { directorySchema } from '@/responses/directory.js';
import { createEndpoint } from '@/utils.js';

const request = z.object({
    id: z.string(),
});

export const getMusicDirectory = createEndpoint(
    {
        path: 'getMusicDirectory.view',
        request: { default: request },
        response: {
            default: z.object({
                directory: directorySchema.ss['1.16.1'],
            }),
            os: {
                '1': z.object({
                    directory: directorySchema.os['1'],
                }),
            },
        },
        summary: 'Returns a listing of all files in a music directory.',
    },
    {
        os: { '1': true },
        ss: { '1.16.1': true },
    },
);
