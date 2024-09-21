import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { baseResponseSchema } from '@/open-subsonic-types.js';

const c = initContract();

const properties = {
    path: 'getLyricsBySongId.view',
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
};

const request = z.object({
    id: z.string(),
});

export const getLyricsBySongId = {
    v1: {
        get: c.query({
            method: 'GET',
            query: request,
            ...properties,
        }),
        post: c.mutation({
            body: request,
            contentType: 'application/x-www-form-urlencoded',
            method: 'POST',
            ...properties,
        }),
    },
};
