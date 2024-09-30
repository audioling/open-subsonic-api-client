import { z } from 'zod';
import { indexId3Schema } from '@/responses/index-id3.js';

export const artistsSchema = z.object({
    ignoredArticles: z.string(),
    index: indexId3Schema.array().optional(),
});
