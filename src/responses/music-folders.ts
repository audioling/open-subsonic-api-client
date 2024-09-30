import { z } from 'zod';
import { musicFolderSchema } from '@/responses/music-folder.js';

export const musicFoldersSchema = z.object({
    musicFolder: musicFolderSchema.array(),
});
