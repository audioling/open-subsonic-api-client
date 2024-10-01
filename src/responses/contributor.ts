import { z } from 'zod';
import { artistId3RelatedSchema } from '@/responses/artist-id3.js';

export const contributorSchema = {
    os: {
        '1': z.object({
            artist: artistId3RelatedSchema.ss['1.16.1'],
            role: z.string().describe('The contributor role.'),
            subRole: z
                .string()
                .optional()
                .describe(
                    'The subRole for roles that may require it. Ex: The instrument for the performer role (TMCL/performer tags). Note: For consistency between different tag formats, the TIPL sub roles should be directly exposed in the role field.',
                ),
        }),
    },
};
