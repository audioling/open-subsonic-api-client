import { z } from 'zod';
import { artistId3RelatedSchema } from '@/responses/artist-id3.js';
import { contributorSchema } from '@/responses/contributor.js';
import { itemGenreSchema } from '@/responses/item-genre.js';
import { replayGainSchema } from '@/responses/replay-gain.js';

const childOpenSubsonicSchema = z.object({
    albumArtists: artistId3RelatedSchema.array().optional(),
    artists: artistId3RelatedSchema.array().optional(),
    bitDepth: z.number().optional(),
    bpm: z.number().optional(),
    channelCount: z.number().optional(),
    comment: z.string().optional(),
    contributors: contributorSchema.array().optional(),
    displayAlbumArtist: z.string().optional(),
    displayArtist: z.string().optional(),
    displayComposer: z.string().optional(),
    genres: itemGenreSchema.array().optional(),
    mediaType: z.string().optional(),
    moods: z.string().array().optional(),
    musicBrainzId: z.string().optional(),
    played: z.string().optional(),
    replayGain: replayGainSchema.optional(),
    samplingRate: z.number().optional(),
    sortName: z.string().optional(),
});

export const childSchema = z
    .object({
        album: z.string().optional(),
        albumId: z.string().optional(),
        artist: z.string().optional(),
        artistId: z.string().optional(),
        averageRating: z.number().optional(),
        bitRate: z.number().optional(),
        bookmarkPosition: z.number().optional(),
        contentType: z.string().optional().describe('The mimeType of the media'),
        coverArt: z.string().optional(),
        created: z.string().optional().describe('Date the media was created. [ISO 8601]'),
        discNumber: z.number().optional(),
        duration: z.number().optional(),
        genre: z.string().optional(),
        id: z.string(),
        isDir: z.boolean(),
        isVideo: z.boolean().optional(),
        originalHeight: z.number().optional(),
        originalWidth: z.number().optional(),
        parent: z.string().optional(),
        path: z.string().optional(),
        playCount: z.number().optional(),
        size: z.number().optional(),
        starred: z.string().optional().describe('Date the media was starred. [ISO 8601]'),
        suffix: z.string().optional(),
        title: z.string(),
        track: z.number().optional(),
        transcodedContentType: z
            .string()
            .optional()
            .describe('The transcoded mediaType if transcoding should happen'),
        transcodedSuffix: z.string().optional().describe('The file suffix of the transcoded media'),
        type: z
            .string()
            .optional()
            .describe('The generic type of media [music/podcast/audiobook/video]'),
        userRating: z.number().optional(),
        year: z.number().optional(),
    })
    .merge(childOpenSubsonicSchema);
