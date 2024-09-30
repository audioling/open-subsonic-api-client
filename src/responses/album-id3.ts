import { z } from 'zod';
import { artistId3RelatedSchema } from '@/responses/artist-id3.js';
import { discTitleSchema } from '@/responses/disc-title.js';
import { itemDateSchema } from '@/responses/item-date.js';
import { itemGenreSchema } from '@/responses/item-genre.js';
import { recordLabelSchema } from '@/responses/record-label.js';

const albumId3OpenSubsonicSchema = z.object({
    artists: artistId3RelatedSchema.array().optional(),
    discTitles: discTitleSchema.array().optional(),
    displayArtist: z.string().optional(),
    genres: itemGenreSchema.array().optional(),
    isCompilation: z.boolean().optional(),
    moods: z.string().array().optional(),
    musicBrainzId: z.string().optional(),
    originalReleaseDate: itemDateSchema.optional(),
    played: z.string().optional().describe('Date the album was last played. [ISO 8601]'),
    recordLabels: recordLabelSchema.array().optional(),
    releaseDate: itemDateSchema.optional(),
    releaseTypes: z
        .string()
        .array()
        .optional()
        .describe('The types of this album release. (Album, Compilation, EP, Remix)'),
    sortName: z.string().optional(),
    userRating: z.number().optional().describe('The user rating of the album. [1-5]'),
});

export const albumId3Schema = z
    .object({
        artist: z.string().optional(),
        artistId: z.string().optional(),
        coverArt: z.string().optional(),
        created: z.string(),
        duration: z.number(),
        genre: z.string().optional(),
        id: z.string(),
        name: z.string(),
        playCount: z.number().optional(),
        songCount: z.number(),
        starred: z.string().optional().describe('Date the album was starred. [ISO 8601]'),
        year: z.number().optional(),
    })
    .merge(albumId3OpenSubsonicSchema);
