import { z } from 'zod';

export const musicFolderSchema = {
    ss: {
        '1.16.1': z.object({
            id: z.number(),
            name: z.string().optional(),
        }),
    },
};
