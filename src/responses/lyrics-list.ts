import { z } from 'zod';
import { structuredLyricsSchema } from '@/responses/structured-lyrics.js';

export const lyricsListSchema = z.object({
    structuredLyrics: structuredLyricsSchema
        .array()
        .optional()
        .describe(
            'Structured lyrics. There can be multiple lyrics of the same type with the same language',
        ),
});
