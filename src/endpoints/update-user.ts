import { z } from 'zod';
import { emptyResponseSchema } from '@/open-subsonic-types.js';
import { createEndpoint, endpointProperties } from '@/utils.js';

const properties = endpointProperties({
    path: '/updateUser.view',
    summary: 'Updates user properties. Only the owner of a user is allowed to update it.',
});

const requestSchema = z.object({
    adminRole: z.boolean().optional().describe('Whether the user is administrator.'),
    commentRole: z
        .boolean()
        .optional()
        .describe('Whether the user is allowed to create and edit comments and ratings.'),
    coverArtRole: z
        .boolean()
        .optional()
        .describe('Whether the user is allowed to change cover art and tags.'),
    downloadRole: z.boolean().optional().describe('Whether the user is allowed to download files.'),
    email: z.string().optional(),
    jukeboxRole: z
        .boolean()
        .optional()
        .describe('Whether the user is allowed to play files in jukebox mode.'),
    ldapAuthenticated: z.boolean().optional().describe('Whether the user is authenicated in LDAP.'),
    maxBitRate: z
        .number()
        .optional()
        .describe(
            'The maximum bit rate (in Kbps) for the user. Audio streams of higher bit rates are automatically downsampled to this bit rate. Legal values: 0 (no limit), 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320.',
        ),
    musicFolderId: z
        .string()
        .array()
        .optional()
        .describe(
            '(Since 1.12.0) IDs of the music folders the user is allowed access to. Include the parameter once for each folder.',
        ),
    password: z
        .string()
        .optional()
        .describe('The password of the user, either in clear text of hex-encoded.'),
    playlistRole: z
        .boolean()
        .optional()
        .describe(
            'Whether the user is allowed to create and delete playlists. Since 1.8.0, changing this role has no effect.',
        ),
    podcastRole: z
        .boolean()
        .optional()
        .describe('Whether the user is allowed to administrate Podcasts.'),
    settingsRole: z
        .boolean()
        .optional()
        .describe('Whether the user is allowed to change personal settings and password.'),
    shareRole: z
        .boolean()
        .optional()
        .describe('(Since 1.8.0) Whether the user is allowed to share files with anyone.'),
    streamRole: z.boolean().optional().describe('Whether the user is allowed to play files.'),
    uploadRole: z.boolean().optional().describe('Whether the user is allowed to upload files.'),
    username: z.string(),
    videoConversionRole: z
        .boolean()
        .optional()
        .describe('(Since 1.15.0) Whether the user is allowed to start video conversions.'),
});

export const updateUser = {
    ...createEndpoint.ss('SS.1.16.1', {
        request: requestSchema,
        response: emptyResponseSchema,
        ...properties,
    }),
    ...createEndpoint.os('OS.1', {
        request: requestSchema,
        response: emptyResponseSchema,
        ...properties,
    }),
};
