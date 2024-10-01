import { z } from 'zod';

export const internetRadioStationSchema = {
    ss: {
        '1.16.1': z.object({
            homePageUrl: z.string().optional(),
            id: z.string(),
            name: z.string(),
            streamUrl: z.string(),
        }),
    },
};
