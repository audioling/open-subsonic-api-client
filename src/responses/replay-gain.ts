import { z } from 'zod';

const replayGainOpenSubsonicSchema = z.object({
    albumGain: z.number().optional().describe('The album replay gain value. (In Db)'),
    albumPeak: z.number().optional().describe('The album peak value. (Must be positive)'),
    baseGain: z
        .number()
        .optional()
        .describe('The base gain value. (In Db) (Ogg Opus Output Gain for example)'),
    fallbackGain: z
        .number()
        .optional()
        .describe(
            'An optional fallback gain that clients should apply when the corresponding gain value is missing. (Can be computed from the tracks or exposed as an user setting.)',
        ),
    trackGain: z.number().optional().describe('The track replay gain value. (In Db)'),
    trackPeak: z.number().optional().describe('The track peak value. (Must be positive)'),
});

export const replayGainSchema = z.object({}).merge(replayGainOpenSubsonicSchema);
