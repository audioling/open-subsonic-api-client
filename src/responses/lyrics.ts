import { z } from 'zod';

export const lyricsSchema = z.object({
    artist: z.string().optional().describe('The artist name'),
    title: z.string().optional().describe('The song title'),
    value: z.string().describe('The lyrics'),
});
