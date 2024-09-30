import { z } from 'zod';

export const internetRadioStationSchema = z.object({
    homePageUrl: z.string().optional(),
    id: z.string(),
    name: z.string(),
    streamUrl: z.string(),
});
