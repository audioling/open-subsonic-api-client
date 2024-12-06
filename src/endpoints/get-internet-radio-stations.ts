import { z } from 'zod';
import { emptyRequestSchema } from '@/open-subsonic-types.js';
import { internetRadioStationSchema } from '@/responses/internet-radio-station.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: '/getInternetRadioStations.view',
    summary: 'Returns a list of internet radio stations.',
});

export const getInternetRadioStations = {
    ...createEndpoint.ss('SS.1.16.1', {
        request: emptyRequestSchema,
        response: z.object({
            internetRadioStation: internetRadioStationSchema.ss['1.16.1'].array(),
        }),
        ...properties,
    }),
    ...createEndpoint.os('OS.1', {
        request: emptyRequestSchema,
        response: z.object({
            internetRadioStation: internetRadioStationSchema.ss['1.16.1'].array(),
        }),
        ...properties,
    }),
};
