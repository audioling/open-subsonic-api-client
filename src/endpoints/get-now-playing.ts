import { z } from 'zod';
import { emptyRequestSchema } from '@/open-subsonic-types.js';
import { nowPlayingSchema } from '@/responses/now-playing.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: 'getNowPlaying.view',
    summary: 'Returns what is currently being played by all users.',
});

export const getNowPlaying = {
    ...createEndpoint.ss('SS.1.16.1', {
        request: emptyRequestSchema,
        response: z.object({
            nowPlaying: nowPlayingSchema.ss['1.16.1'],
        }),
        ...properties,
    }),
    ...createEndpoint.os('OS.1', {
        request: emptyRequestSchema,
        response: z.object({
            nowPlaying: nowPlayingSchema.os['1'],
        }),
        ...properties,
    }),
};
