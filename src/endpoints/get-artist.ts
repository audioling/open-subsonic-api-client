import { z } from 'zod';
import { artistSchema } from '@/responses/artist.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: '/getArtist.view',
    summary: 'Returns details for an artist, including a list of albums.',
});

const requestSchema = z.object({
    id: z.string(),
});

export const getArtist = {
    ...createEndpoint.ss('SS.1.16.1', {
        request: requestSchema,
        response: z.object({
            artist: artistSchema.ss['1.16.1'],
        }),
        ...properties,
    }),
    ...createEndpoint.os('OS.1', {
        request: requestSchema,
        response: z.object({
            artist: artistSchema.os['1'],
        }),
        ...properties,
    }),
};
