import { z } from 'zod';
import { chatMessageSchema } from '@/responses/chat-message.js';

export const chatMessagesSchema = {
    ss: {
        '1.16.1': z.object({
            chatMessages: chatMessageSchema.ss['1.16.1'].array().optional(),
        }),
    },
};
