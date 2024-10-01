import { z } from 'zod';

export const openSubsonicExtensionSchema = {
    os: {
        '1': z.object({
            name: z.string(),
            versions: z.number().array(),
        }),
    },
};
