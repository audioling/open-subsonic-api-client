import { childSchema } from '@/responses/child.js';
import { playlistSchema } from '@/responses/playlist.js';

export const playlistWithSongsSchema = {
    os: {
        '1': playlistSchema.ss['1.16.1'].extend({
            entry: childSchema.os['1'].array().optional(),
        }),
    },
    ss: {
        '1.16.1': playlistSchema.ss['1.16.1'].extend({
            entry: childSchema.ss['1.16.1'].array().optional(),
        }),
    },
};
