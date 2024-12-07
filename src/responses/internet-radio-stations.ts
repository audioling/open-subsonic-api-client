import { z } from 'zod';
import { internetRadioStationSchema } from '@/responses/internet-radio-station.js';

export const internetRadioStationsSchema = {
    ss: {
        '1.16.1': z.object({
            internetRadioStation: internetRadioStationSchema.ss['1.16.1'].array().optional(),
        }),
    },
};
