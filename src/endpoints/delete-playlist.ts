import { z } from 'zod';
import { emptyResponseSchema } from '@/open-subsonic-types.js';
import { createEndpoint } from '@/utils.js';

export const deletePlaylist = createEndpoint(
    {
        path: 'deletePlaylist.view',
        request: {
            default: z.object({
                id: z.string(),
            }),
        },
        response: { default: emptyResponseSchema },
        summary: 'Deletes a saved playlist.',
    },
    {
        os: { '1': true },
        ss: { '1.16.1': true },
    },
);
