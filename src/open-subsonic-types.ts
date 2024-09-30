import { z } from 'zod';

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

export enum OpenSubsonicExtensions {
    HTTP_FORM_POST = 'formPost', // https://opensubsonic.netlify.app/docs/extensions/formpost/
    SONG_LYRICS = 'songLyrics', // https://opensubsonic.netlify.app/docs/extensions/songlyrics/
    TRANSCODE_OFFSET = 'transcodeOffset', // https://opensubsonic.netlify.app/docs/extensions/transcodeoffset/
}
