import { z } from 'zod';

export const musicFolderSchema = z.object({
    id: z.string(),
    name: z.string().optional(),
});
