import { z } from 'zod';
import { lyricsListSchema } from '@/responses/lyrics-list.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: '/getLyricsBySongId.view',
    summary: 'Retrieves all structured lyrics from the server for a given song.',
});

const requestSchema = z.object({
    id: z.string(),
});

export const getLyricsBySongId = {
    ...createEndpoint.os('OS.1', {
        request: requestSchema,
        response: z.object({
            lyricsList: lyricsListSchema.os['1'],
        }),
        ...properties,
    }),
};
