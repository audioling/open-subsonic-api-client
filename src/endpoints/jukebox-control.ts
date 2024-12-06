import { z } from 'zod';
import { jukeboxPlaylistSchema } from '@/responses/jukebox-playlist.js';
import { jukeboxStatusSchema } from '@/responses/jukebox-status.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: '/jukeboxControl.view',
    summary: 'Controls the jukebox, i.e., playback directly on the server’s audio hardware.',
});

const requestSchema = z.object({
    action: z
        .enum([
            'get',
            'status',
            'set',
            'start',
            'stop',
            'skip',
            'add',
            'clear',
            'remove',
            'shuffle',
            'setGain',
        ])
        .optional(),
    gain: z
        .number()
        .optional()
        .describe(
            'Used by setGain to control the playback volume. A float value between 0.0 and 1.0.',
        ),
    id: z
        .string()
        .array()
        .optional()
        .describe(
            'Used by add and set. ID of song to add to the jukebox playlist. Use multiple id parameters to add many songs in the same request. (set is similar to a clear followed by a add, but will not change the currently playing track.)',
        ),
    index: z
        .number()
        .optional()
        .describe('Used by skip and remove. Zero-based index of the song to skip to or remove.'),
    offset: z
        .number()
        .optional()
        .describe('Used by skip. Start playing this many seconds into the track.'),
});

export const jukeboxControl = {
    ...createEndpoint.ss('SS.1.16.1', {
        request: requestSchema,
        response: z.object({
            jukeboxPlaylist: jukeboxPlaylistSchema.ss['1.16.1'],
            jukeboxStatus: jukeboxStatusSchema.ss['1.16.1'],
        }),
        ...properties,
    }),
    ...createEndpoint.os('OS.1', {
        request: requestSchema,
        response: z.object({
            jukeboxPlaylist: jukeboxPlaylistSchema.ss['1.16.1'],
            jukeboxStatus: jukeboxStatusSchema.ss['1.16.1'],
        }),
        ...properties,
    }),
};
