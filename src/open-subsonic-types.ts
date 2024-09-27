import { z } from 'zod';

const baseResponseOpenSubsonicSchema = z.object({
    openSubsonic: z.boolean().optional(),
    serverVersion: z.string().optional(),
    type: z.string().optional(),
});

export const baseResponseSchema = z
    .object({
        status: z.string(),
        version: z.string(),
    })
    .merge(baseResponseOpenSubsonicSchema);

export const baseResponse = z.object({
    'subsonic-response': z
        .object({
            status: z.string(),
            version: z.string(),
        })
        .merge(baseResponseOpenSubsonicSchema),
});

export const emptyParameters = z.object({});

export const baseAttributes = z.object({
    openSubsonic: z.string().optional(),
    serverVersion: z.string().optional(),
    status: z.string(),
    type: z.string(),
    version: z.string(),
});

export const authenticateParameters = z.object({
    c: z.string(),
    f: z.string(),
    p: z.string().optional(),
    s: z.string().optional(),
    t: z.string().optional(),
    u: z.string(),
    v: z.string(),
});

export const userSchema = z.object({
    adminRole: z.boolean(),
    commentRole: z.boolean(),
    coverArtRole: z.boolean(),
    downloadRole: z.boolean(),
    email: z.string().optional(),
    folder: z.string().array(),
    playlistRole: z.boolean(),
    podcastRole: z.boolean(),
    scrobblingEnabled: z.boolean(),
    settingsRole: z.boolean(),
    shareRole: z.boolean(),
    streamRole: z.boolean(),
    uploadRole: z.boolean(),
    username: z.string(),
});

export const playlistSchema = z.object({
    changed: z.string(),
    created: z.string(),
    duration: z.number(),
    id: z.string(),
    name: z.string(),
    note: z.string().optional(),
    owner: z.string(),
    public: z.boolean(),
    songCount: z.number(),
});

const songOpenSubsonicSchema = z.object({
    bpm: z.number().optional(),
    mediaType: z.string().optional(),
});

export const songSchema = z
    .object({
        album: z.string(),
        albumId: z.string(),
        artist: z.string().optional(),
        artistId: z.string().optional(),
        averageRating: z.number().optional(),
        bitDepth: z.number().optional(),
        bitRate: z.number().optional(),
        channelCount: z.number().optional(),
        contentType: z.string(),
        coverArt: z.string().optional(),
        created: z.string(),
        discNumber: z.number(),
        duration: z.number(),
        genre: z.string().optional(),
        id: z.string(),
        isDir: z.boolean(),
        isVideo: z.boolean(),
        parent: z.string(),
        path: z.string(),
        playCount: z.number().optional(),
        played: z.string().optional(),
        replayGain: z
            .object({
                albumGain: z.number().optional(),
                albumPeak: z.number().optional(),
                trackGain: z.number().optional(),
                trackPeak: z.number().optional(),
            })
            .optional(),
        samplingRate: z.number().optional(),
        size: z.number(),
        starred: z.string().optional(),
        suffix: z.string(),
        title: z.string(),
        track: z.number().optional(),
        type: z.string(),
        userRating: z.number().optional(),
        year: z.number(),
    })
    .merge(songOpenSubsonicSchema);

// OpenSubsonic https://opensubsonic.netlify.app/docs/responses/albumid3/
const albumOpenSubsonicSchema = z.object({
    artistId: z.string().optional(),
    artists: z.object({ id: z.string(), name: z.string() }).array().optional(),
    discTitles: z.object({ disc: z.number(), title: z.string() }).array().optional(),
    displayArtist: z.string().optional(),
    genres: z.object({ name: z.string() }).array().optional(),
    isCompilation: z.boolean().optional(),
    isDir: z.boolean().optional(),
    isVideo: z.boolean().optional(),
    moods: z.string().array().optional(),
    musicBrainzId: z.string().optional(),
    originalReleaseDate: z
        .object({
            day: z.number().optional(),
            month: z.number().optional(),
            year: z.number().optional(),
        })
        .optional(),
    parent: z.string(),
    recordLabels: z.object({ name: z.string() }).array().optional(),
    releaseDate: z
        .object({
            day: z.number().optional(),
            month: z.number().optional(),
            year: z.number().optional(),
        })
        .optional(),
    releaseTypes: z.string().array().optional(),
    sortName: z.string().optional(),
});

export const albumSchema = z
    .object({
        artist: z.string(),
        artistId: z.string().optional(),
        coverArt: z.string(),
        created: z.string(),
        duration: z.number(),
        genre: z.string().optional(),
        id: z.string(),
        name: z.string(),
        playCount: z.number(),
        played: z.string().optional(),
        song: z.array(songSchema).optional(),
        songCount: z.number(),
        starred: z.string().optional(),
        userRating: z.number().optional(),
        year: z.number(),
    })
    .merge(albumOpenSubsonicSchema);

// OpenSubsonic https://opensubsonic.netlify.app/docs/responses/artistid3/
const artistOpenSubsonicSchema = z.object({
    musicBrainzId: z.string().optional(),
    roles: z.string().array().optional(),
    sortName: z.string().optional(),
});

export const artistSchema = z
    .object({
        albumCount: z.number().optional(),
        artistImageUrl: z.string().optional(),
        coverArt: z.string().optional(),
        id: z.string(),
        name: z.string(),
        starred: z.string().optional(),
        userRating: z.number().optional(),
    })
    .merge(artistOpenSubsonicSchema);

export const genreSchema = z.object({
    albumCount: z.number(),
    songCount: z.number(),
    value: z.string(),
});

export enum OpenSubsonicExtensions {
    HTTP_FORM_POST = 'formPost', // https://opensubsonic.netlify.app/docs/extensions/formpost/
    SONG_LYRICS = 'songLyrics', // https://opensubsonic.netlify.app/docs/extensions/songlyrics/
    TRANSCODE_OFFSET = 'transcodeOffset', // https://opensubsonic.netlify.app/docs/extensions/transcodeoffset/
}
