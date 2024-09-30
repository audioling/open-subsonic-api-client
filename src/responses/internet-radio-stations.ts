import { z } from 'zod';
import { internetRadioStationSchema } from '@/responses/internet-radio-station.js';

export const internetRadioStationsSchema = z.object({
    internetRadioStation: internetRadioStationSchema.array(),
});
