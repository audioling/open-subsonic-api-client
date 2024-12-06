import type {
    AppRoute,
    ClientInferResponseBody as TsRestClientInferResponseBody,
    FetchOptions as TsRestFetchOptions,
    ServerInferRequest as TsRestServerInferRequest,
    ServerInferResponses as TsRestServerInferResponses,
} from '@ts-rest/core';
import { initClient, initContract } from '@ts-rest/core';
import type { CreateAxiosDefaults } from 'axios';
import axios from 'axios';
import qs from 'qs';
import { type z } from 'zod';
import { addChatMessage } from '@/endpoints/add-chat-message.js';
import { changePassword } from '@/endpoints/change-password.js';
import { createBookmark } from '@/endpoints/create-boomark.js';
import { createInternetRadioStation } from '@/endpoints/create-internet-radio-station.js';
import { createPlaylist } from '@/endpoints/create-playlist.js';
import { createPodcastChannel } from '@/endpoints/create-podcast-channel.js';
import { createShare } from '@/endpoints/create-share.js';
import { createUser } from '@/endpoints/create-user.js';
import { deleteBookmark } from '@/endpoints/delete-bookmark.js';
import { deleteInternetRadioStation } from '@/endpoints/delete-internet-radio-station.js';
import { deletePlaylist } from '@/endpoints/delete-playlist.js';
import { deletePodcastChannel } from '@/endpoints/delete-podcast-channel.js';
import { deletePodcastEpisode } from '@/endpoints/delete-podcast-episode.js';
import { deleteShare } from '@/endpoints/delete-share.js';
import { deleteUser } from '@/endpoints/delete-user.js';
import { downloadPodcastEpisode } from '@/endpoints/download-podcast-episode.js';
import { download } from '@/endpoints/download.js';
import { getAlbumInfo2 } from '@/endpoints/get-album-info-2.js';
import { getAlbumInfo } from '@/endpoints/get-album-info.js';
import { getAlbumList2 } from '@/endpoints/get-album-list-2.js';
import { getAlbumList } from '@/endpoints/get-album-list.js';
import { getAlbum } from '@/endpoints/get-album.js';
import { getArtistInfo2 } from '@/endpoints/get-artist-info-2.js';
import { getArtistInfo } from '@/endpoints/get-artist-info.js';
import { getArtist } from '@/endpoints/get-artist.js';
import { getArtists } from '@/endpoints/get-artists.js';
import { getAvatar } from '@/endpoints/get-avatar.js';
import { getBookmarks } from '@/endpoints/get-bookmarks.js';
import { getCaptions } from '@/endpoints/get-captions.js';
import { getChatMessages } from '@/endpoints/get-chat-messages.js';
import { getCoverArt } from '@/endpoints/get-cover-art.js';
import { getGenres } from '@/endpoints/get-genres.js';
import { getInternetRadioStations } from '@/endpoints/get-internet-radio-stations.js';
import { getLicense } from '@/endpoints/get-license.js';
import { getLyricsBySongId } from '@/endpoints/get-lyrics-by-song-id.js';
import { getLyrics } from '@/endpoints/get-lyrics.js';
import { getMusicDirectory } from '@/endpoints/get-music-directory.js';
import { getMusicFolders } from '@/endpoints/get-music-folders.js';
import { getNowPlaying } from '@/endpoints/get-now-playing.js';
import { getOpenSubsonicExtensions } from '@/endpoints/get-open-subsonic-extensions.js';
import { getPlayQueue } from '@/endpoints/get-play-queue.js';
import { getPlaylist } from '@/endpoints/get-playlist.js';
import { getPlaylists } from '@/endpoints/get-playlists.js';
import { getRandomSongs } from '@/endpoints/get-random-songs.js';
import { getScanStatus } from '@/endpoints/get-scan-status.js';
import { getShares } from '@/endpoints/get-shares.js';
import { getSimilarSongs2 } from '@/endpoints/get-similar-songs-2.js';
import { getSimilarSongs } from '@/endpoints/get-similar-songs.js';
import { getSong } from '@/endpoints/get-song.js';
import { getSongsByGenre } from '@/endpoints/get-songs-by-genre.js';
import { getStarred2 } from '@/endpoints/get-starred-2.js';
import { getStarred } from '@/endpoints/get-starred.js';
import { getTopSongs } from '@/endpoints/get-top-songs.js';
import { getUser } from '@/endpoints/get-user.js';
import { getUsers } from '@/endpoints/get-users.js';
import { getVideoInfo } from '@/endpoints/get-video-info.js';
import { getVideos } from '@/endpoints/get-videos.js';
import { hls } from '@/endpoints/hls.js';
import { jukeboxControl } from '@/endpoints/jukebox-control.js';
import { ping } from '@/endpoints/ping.js';
import { savePlayQueue } from '@/endpoints/save-play-queue.js';
import { scrobble } from '@/endpoints/scrobble.js';
import { search2 } from '@/endpoints/search-2.js';
import { search3 } from '@/endpoints/search-3.js';
import { setRating } from '@/endpoints/set-rating.js';
import { star } from '@/endpoints/star.js';
import { startScan } from '@/endpoints/start-scan.js';
import { stream } from '@/endpoints/stream.js';
import { tokenInfo } from '@/endpoints/token-info.js';
import { unstar } from '@/endpoints/unstar.js';
import { updateInternetRadioStation } from '@/endpoints/update-internet-radio-station.js';
import { updatePlaylist } from '@/endpoints/update-playlist.js';
import { updateShare } from '@/endpoints/update-share.js';
import { updateUser } from '@/endpoints/update-user.js';
import type { subsonicResponseSchema } from '@/responses/subsonic-response.js';
import { parsePath } from '@/utils.js';

interface OpenSubsonicAPIOptions {
    baseUrl: string;
    clientName: string;
    username: string;
}

interface OpenSubsonicAPIWithPasswordOptions extends OpenSubsonicAPIOptions {
    password: string;
}

interface OpenSubsonicAPIWithTokenOptions extends OpenSubsonicAPIOptions {
    salt: string;
    token: string;
}

type OpenSubsonicApiClientOptions =
    | OpenSubsonicAPIWithPasswordOptions
    | OpenSubsonicAPIWithTokenOptions;

const c = initContract();

const initOpenSubsonicContract = () => {
    return c.router({
        addChatMessage,
        changePassword,
        createBookmark,
        createInternetRadioStation,
        createPlaylist,
        createPodcastChannel,
        createShare,
        createUser,
        deleteBookmark,
        deleteInternetRadioStation,
        deletePlaylist,
        deletePodcastChannel,
        deletePodcastEpisode,
        deleteShare,
        deleteUser,
        download,
        downloadPodcastEpisode,
        getAlbum,
        getAlbumInfo,
        getAlbumInfo2,
        getAlbumList,
        getAlbumList2,
        getArtist,
        getArtistInfo,
        getArtistInfo2,
        getArtists,
        getAvatar,
        getBookmarks,
        getCaptions,
        getChatMessages,
        getCoverArt,
        getGenres,
        getInternetRadioStations,
        getLicense,
        getLyrics,
        getLyricsBySongId,
        getMusicDirectory,
        getMusicFolders,
        getNowPlaying,
        getOpenSubsonicExtensions,
        getPlayQueue,
        getPlaylist,
        getPlaylists,
        getRandomSongs,
        getScanStatus,
        getShares,
        getSimilarSongs,
        getSimilarSongs2,
        getSong,
        getSongsByGenre,
        getStarred,
        getStarred2,
        getTopSongs,
        getUser,
        getUsers,
        getVideoInfo,
        getVideos,
        hls,
        jukeboxControl,
        ping,
        savePlayQueue,
        scrobble,
        search2,
        search3,
        setRating,
        star,
        startScan,
        stream,
        tokenInfo,
        unstar,
        updateInternetRadioStation,
        updatePlaylist,
        updateShare,
        updateUser,
    });
};

export type ClientInferResponseBody<
    T extends AppRoute,
    K extends keyof T['responses'],
> = TsRestClientInferResponseBody<T, K>;

export type ServerInferRequest<T extends AppRoute> = TsRestServerInferRequest<T>;

export type ServerInferResponses<T extends AppRoute> = TsRestServerInferResponses<T>;

export const initOpenSubsonicApiClient = (
    clientOptions: OpenSubsonicApiClientOptions,
    axiosOptions?: Partial<CreateAxiosDefaults>,
) => {
    const axiosClient = axios.create(axiosOptions);

    axiosClient.defaults.paramsSerializer = (params) => {
        return qs.stringify(params, { arrayFormat: 'repeat' });
    };

    axiosClient.interceptors.response.use(
        (response) => {
            const data = response.data;

            if (data['subsonic-response'].status !== 'ok') {
                if (data['subsonic-response'].error.code !== 0) {
                    throw new Error(data['subsonic-response'].error.message);
                }
            }

            return response;
        },
        (error) => {
            return Promise.reject(error);
        },
    );

    const baseUrl = `${clientOptions.baseUrl}/rest`;
    const clientName = clientOptions.clientName;
    const username = clientOptions.username;
    let password: string | undefined;
    let salt: string | undefined;
    let token: string | undefined;

    if ('salt' in clientOptions && 'token' in clientOptions) {
        salt = clientOptions.salt;
        token = clientOptions.token;
    } else if ('password' in clientOptions) {
        password = clientOptions.password;
    }

    return initClient(initOpenSubsonicContract(), {
        api: async ({ path, method, headers, body, fetchOptions }) => {
            const { params, path: api } = parsePath(path);

            const authParams: Record<string, string> = {
                u: username,
            };

            if (token && salt) {
                authParams.s = salt;
                authParams.t = token;
            } else if (password) {
                authParams.p = password;
            }

            try {
                const result = await axiosClient.request<
                    z.infer<(typeof subsonicResponseSchema.ss)['1.16.1']>
                >({
                    data: body,
                    headers,
                    method: method,
                    params: {
                        c: clientName,
                        f: 'json',
                        v: '1.16.1',
                        ...params,
                        ...authParams,
                    },
                    signal: fetchOptions?.signal as AbortSignal | undefined,
                    url: `${baseUrl}${api}`,
                });

                return {
                    body: result.data['subsonic-response'],
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    headers: new Headers((result.headers as any).toJSON()),
                    status: result.status,
                };
            } catch (e: unknown) {
                if (e) {
                    const error = e;
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    const response = (error as any).message;

                    return {
                        body: response as string,
                        headers: new Headers(),
                        status: 500,
                    };
                }
                throw e;
            }
        },
        baseHeaders: {
            'Content-Type': 'application/json',
        },
        baseUrl: '',
    });
};

export type OpenSubsonicApiClient = ReturnType<typeof initOpenSubsonicApiClient>;

export type FetchOptions = TsRestFetchOptions;
