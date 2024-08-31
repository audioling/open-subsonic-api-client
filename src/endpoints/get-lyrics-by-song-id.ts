import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { baseResponseSchema } from '@/open-subsonic-types.js';

const c = initContract();

export const getLyricsBySongId = c.query({
    method: 'GET',
    path: 'getLyricsBySongId.view',
    query: z.object({
        id: z.string(),
    }),
    responses: {
        200: baseResponseSchema.extend({
            lyricsList: z
                .object({
                    structuredLyrics: z
                        .object({
                            displayArtist: z.string().optional(),
                            displayTitle: z.string().optional(),
                            lang: z.string(),
                            line: z
                                .object({
                                    start: z.number().optional(),
                                    value: z.string(),
                                })
                                .array(),
                            offset: z.number().optional(),
                            synced: z.boolean(),
                        })
                        .array()
                        .optional(),
                })
                .optional(),
        }),
    },
    summary:
        'Retrieves all structured lyrics from the server for a given song. The lyrics can come from embedded tags (SYLT/USLT), LRC file/text file, or any other external source.',
});
