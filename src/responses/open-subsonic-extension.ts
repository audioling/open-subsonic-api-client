import { z } from 'zod';

export const openSubsonicExtensionSchema = z.object({
    name: z.string(),
    versions: z.number().array(),
});
