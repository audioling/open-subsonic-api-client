import { z } from 'zod';
import { indexId3Schema } from '@/responses/index-id3.js';

export const indexesSchema = z.object({
    ignoredArticles: z.string(),
    index: indexId3Schema.array().optional(),
});
