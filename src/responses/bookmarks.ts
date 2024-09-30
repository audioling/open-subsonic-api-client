import { z } from 'zod';
import { bookmarkSchema } from '@/responses/bookmark.js';

export const bookmarksSchema = z.object({
    bookmark: bookmarkSchema.array(),
});
