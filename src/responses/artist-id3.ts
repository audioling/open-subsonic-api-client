import { z } from 'zod';

const artistId3OpenSubsonicSchema = z.object({
    musicBrainzId: z.string().optional(),
    roles: z.string().array().optional(),
    sortName: z.string().optional(),
});

export const artistId3Schema = z
    .object({
        albumCount: z.number().optional(),
        artistImageUrl: z.string().optional(),
        coverArt: z.string().optional(),
        id: z.string(),
        name: z.string(),
        starred: z.string().optional(),
        userRating: z.number().optional(),
    })
    .merge(artistId3OpenSubsonicSchema);

export const artistId3RelatedSchema = artistId3Schema.pick({ id: true, name: true });
