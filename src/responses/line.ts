import { z } from 'zod';

export const lineSchema = {
    os: {
        '1': z.object({
            start: z
                .number()
                .optional()
                .describe(
                    'The start time of the lyrics, relative to the start time of the track, in milliseconds. If this is not part of synced lyrics, start must be omitted',
                ),
            value: z.string().describe('The actual text of this line'),
        }),
    },
};
