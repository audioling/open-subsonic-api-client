import { z } from 'zod';
import { emptyResponseSchema } from '@/open-subsonic-types.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: 'savePlayQueue.view',
    summary: 'Saves the state of the play queue for this user.',
});

const requestSchema = z.object({
    current: z.string().describe('The ID of the current playing song.'),
    id: z.string().array(),
    position: z.number().describe('The position (in milliseconds) within the media file.'),
});

export const savePlayQueue = {
    ...createEndpoint.ss('SS.1.16.1', {
        request: requestSchema,
        response: emptyResponseSchema,
        ...properties,
    }),
    ...createEndpoint.os('OS.1', {
        request: requestSchema,
        response: emptyResponseSchema,
        ...properties,
    }),
};
