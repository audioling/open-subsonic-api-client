import { z } from 'zod';
import { structuredLyricsSchema } from '@/responses/structured-lyrics.js';

export const lyricsListSchema = {
    os: {
        '1': z.object({
            structuredLyrics: structuredLyricsSchema.os['1']
                .array()
                .optional()
                .describe(
                    'Structured lyrics. There can be multiple lyrics of the same type with the same language',
                ),
        }),
    },
};
