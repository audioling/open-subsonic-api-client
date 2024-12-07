import { z } from 'zod';

export const podcastStatusSchema = {
    ss: {
        '1.16.1': z.enum(['new', 'downloading', 'completed', 'error', 'deleted', 'skipped']),
    },
};
