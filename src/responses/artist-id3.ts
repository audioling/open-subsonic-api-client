import { z } from 'zod';

const schema = z.object({
    albumCount: z.number().optional(),
    artistImageUrl: z.string().optional(),
    coverArt: z.string().optional(),
    id: z.string(),
    name: z.string(),
    starred: z.string().optional(),
    userRating: z.number().optional(),
});

export const artistId3Schema = {
    os: {
        '1': schema.extend({
            musicBrainzId: z.string().optional(),
            roles: z.string().array().optional(),
            sortName: z.string().optional(),
        }),
    },
    ss: {
        '1.16.1': schema,
    },
};
export const artistId3RelatedSchema = {
    ss: {
        '1.16.1': artistId3Schema.ss['1.16.1'].pick({ id: true, name: true }),
    },
};
