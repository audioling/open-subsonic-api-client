import { z } from 'zod';
import { lineSchema } from '@/responses/line.js';

export const structuredLyricsSchema = {
    os: {
        '1': z.object({
            displayArtist: z
                .string()
                .optional()
                .describe(
                    'The artist name to display. This could be the localized name, or any other value',
                ),
            displayTitle: z
                .string()
                .optional()
                .describe(
                    'The title to display. This could be the song title (localized), or any other value',
                ),
            lang: z
                .string()
                .describe(
                    'The lyrics language (ideally ISO 639). If the language is unknown (e.g. lrc file), the server must return und (ISO standard) or xxx',
                ),
            line: lineSchema.os['1']
                .array()
                .describe('The actual lyrics. Ordered by start time (synced) or appearance order'),
            offset: z
                .number()
                .optional()
                .describe(
                    'The offset to apply to all lyrics, in milliseconds. Positive means lyrics appear sooner, negative means later. If not included, the offset must be assumed to be 0',
                ),
            synced: z.boolean().describe('True if the lyrics are synced, false otherwise'),
        }),
    },
};
