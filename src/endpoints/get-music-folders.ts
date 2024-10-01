import { z } from 'zod';
import { emptyRequestSchema } from '@/open-subsonic-types.js';
import { musicFoldersSchema } from '@/responses/music-folders.js';
import { createEndpoint } from '@/utils.js';

export const getMusicFolders = createEndpoint(
    {
        path: 'getMusicFolders.view',
        request: { default: emptyRequestSchema },
        response: {
            default: z.object({
                musicFolders: musicFoldersSchema.ss['1.16.1'],
            }),
        },
        summary: 'Returns all configured top-level music folders.',
    },
    {
        os: { '1': true },
        ss: { '1.16.1': true },
    },
);
