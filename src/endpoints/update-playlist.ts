import { z } from 'zod';
import { emptyResponseSchema } from '@/open-subsonic-types.js';
import { createEndpoint } from '@/utils.js';

export const updatePlaylist = createEndpoint(
    {
        path: 'updatePlaylist.view',
        request: {
            default: z.object({
                comment: z.string().optional(),
                name: z.string().optional(),
                playlistId: z.string(),
                public: z.boolean().optional(),
                songIdToAdd: z.string().array().optional(),
                songIdToRemove: z.string().array().optional(),
            }),
        },
        response: { default: emptyResponseSchema },
        summary: 'Updates a playlist. Only the owner of a playlist is allowed to update it.',
    },
    {
        os: { '1': true },
        ss: { '1.16.1': true },
    },
);
