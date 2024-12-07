import { z } from 'zod';
import { musicFolderSchema } from '@/responses/music-folder.js';

export const musicFoldersSchema = {
    ss: {
        '1.16.1': z.object({
            musicFolder: musicFolderSchema.ss['1.16.1'].array().optional(),
        }),
    },
};
