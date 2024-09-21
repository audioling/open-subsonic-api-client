import { initContract } from '@ts-rest/core';
import { z } from 'zod';

const c = initContract();

const properties = {
    path: 'download',
    responses: {
        200: z.string(),
    },
    summary: 'Downloads a given media file.',
};

const request = z.object({
    id: z
        .string()
        .describe(
            'Returns binary data on success, or an XML document on error (in which case the HTTP content type will start with “text/xml”).',
        ),
});

export const download = {
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
};
