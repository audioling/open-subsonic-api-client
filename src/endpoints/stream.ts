import { z } from 'zod';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: 'stream.view',
    summary: 'Streams a given media file.',
});

const requestSchema = z.object({
    converted: z
        .boolean()
        .optional()
        .describe(
            'Only applicable to video streaming. Subsonic can optimize videos for streaming by converting them to MP4. If a conversion exists for the video in question, then setting this parameter to "true" will cause the converted video to be returned instead of the original.',
        ),
    estimateContentLength: z
        .boolean()
        .optional()
        .describe(
            'If set to "true", the Content-Length HTTP header will be set to an estimated value for transcoded or downsampled media.',
        ),
    format: z
        .string()
        .optional()
        .describe(
            'Specifies the preferred target format (e.g., "mp3" or "flv") in case there are multiple applicable transcodings. Starting with 1.9.0 you can use the special value "raw" to disable transcoding.',
        ),
    id: z.string(),
    maxBitRate: z
        .number()
        .optional()
        .describe(
            'If specified, the server will attempt to limit the bitrate to this value, in kilobits per second. If set to zero, no limit is imposed.',
        ),
    size: z
        .number()
        .optional()
        .describe(
            'Only applicable to video streaming. Requested video size specified as WxH, for instance "640x480".',
        ),
    timeOffset: z
        .number()
        .optional()
        .describe(
            '[OS] Only applicable to video streaming. If specified, start streaming at the given offset (in seconds) into the video. Typically used to implement video skipping.',
        ),
});

export const stream = {
    ...createEndpoint.ssExplicit('SS.1.16.1', {
        request: requestSchema,
        response: z.string(),
        ...properties,
    }),
    ...createEndpoint.osExplicit('OS.1', {
        request: requestSchema,
        response: z.string(),
        ...properties,
    }),
};
