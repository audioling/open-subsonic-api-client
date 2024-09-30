import { z } from 'zod';

export const licenseSchema = z.object({
    email: z.string().optional().describe('User email'),
    licenseExpires: z.string().optional().describe('End of license date. [ISO 8601]'),
    trialExpires: z.string().optional().describe('End of trial date. [ISO 8601]'),
    valid: z.boolean().describe('The status of the license'),
});
