import { z } from 'zod';

export const musicFolderSchema = {
    ss: {
        '1.16.1': z.object({
            id: z.string(),
            name: z.string().optional(),
        }),
    },
};
