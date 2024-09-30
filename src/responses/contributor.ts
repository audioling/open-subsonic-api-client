import { z } from 'zod';
import { artistId3RelatedSchema } from '@/responses/artist-id3.js';

const contributorOpenSubsonicSchema = z.object({
    artist: artistId3RelatedSchema,
    role: z.string().describe('The contributor role.'),
    subRole: z
        .string()
        .optional()
        .describe(
            'The subRole for roles that may require it. Ex: The instrument for the performer role (TMCL/performer tags). Note: For consistency between different tag formats, the TIPL sub roles should be directly exposed in the role field.',
        ),
});

export const contributorSchema = z.object({}).merge(contributorOpenSubsonicSchema);
