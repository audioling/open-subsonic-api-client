import { z } from 'zod';
import { createEndpoint } from '@/utils.js';

export const download = createEndpoint(
    {
        path: 'download.view',
        request: {
            default: z.object({
                id: z
                    .string()
                    .describe(
                        'Returns binary data on success, or an XML document on error (in which case the HTTP content type will start with “text/xml”).',
                    ),
            }),
        },
        response: { default: z.string() },
        summary: 'Downloads a given media file.',
    },
    {
        os: { '1': true },
        ss: { '1.16.1': true },
    },
);
