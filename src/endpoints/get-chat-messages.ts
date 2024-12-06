import { z } from 'zod';
import { chatMessageSchema } from '@/responses/chat-message.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: 'getChatMessages.view',
    summary: 'Returns the current visible (non-expired) chat messages.',
});

const requestSchema = z.object({
    since: z
        .number()
        .optional()
        .describe('Only return messages newer than this time (in millis since Jan 1 1970).'),
});

export const getChatMessages = {
    ...createEndpoint.ss('SS.1.16.1', {
        request: requestSchema,
        response: z.object({
            chatMessages: z.array(chatMessageSchema.ss['1.16.1']),
        }),
        ...properties,
    }),
    ...createEndpoint.os('OS.1', {
        request: requestSchema,
        response: z.object({
            chatMessages: z.array(chatMessageSchema.ss['1.16.1']),
        }),
        ...properties,
    }),
};
