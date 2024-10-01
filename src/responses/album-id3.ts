import { z } from 'zod';
import { artistId3RelatedSchema } from '@/responses/artist-id3.js';
import { discTitleSchema } from '@/responses/disc-title.js';
import { itemDateSchema } from '@/responses/item-date.js';
import { itemGenreSchema } from '@/responses/item-genre.js';
import { recordLabelSchema } from '@/responses/record-label.js';

const schema = z.object({
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
});

export const albumId3Schema = {
    os: {
        '1': schema.extend({
            artists: artistId3RelatedSchema.ss['1.16.1'].array().optional(),
            discTitles: discTitleSchema.os['1'].array().optional(),
            displayArtist: z.string().optional(),
            genres: itemGenreSchema.os['1'].array().optional(),
            isCompilation: z.boolean().optional(),
            moods: z.string().array().optional(),
            musicBrainzId: z.string().optional(),
            originalReleaseDate: itemDateSchema.os['1'].optional(),
            played: z.string().optional().describe('Date the album was last played. [ISO 8601]'),
            recordLabels: recordLabelSchema.os['1'].array().optional(),
            releaseDate: itemDateSchema.os['1'].optional(),
            releaseTypes: z
                .string()
                .array()
                .optional()
                .describe('The types of this album release. (Album, Compilation, EP, Remix)'),
            sortName: z.string().optional(),
            userRating: z.number().optional().describe('The user rating of the album. [1-5]'),
        }),
    },
    ss: {
        '1.16.1': schema,
    },
};
