import { z } from 'zod';
import { emptyRequestSchema } from '@/open-subsonic-types.js';
import { musicFoldersSchema } from '@/responses/music-folders.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: '/getMusicFolders.view',
    summary: 'Returns all configured top-level music folders.',
});

export const getMusicFolders = {
    ...createEndpoint.ss('SS.1.16.1', {
        request: emptyRequestSchema,
        response: z.object({
            musicFolders: musicFoldersSchema.ss['1.16.1'],
        }),
        ...properties,
    }),
    ...createEndpoint.os('OS.1', {
        request: emptyRequestSchema,
        response: z.object({
            musicFolders: musicFoldersSchema.ss['1.16.1'],
        }),
        ...properties,
    }),
};
