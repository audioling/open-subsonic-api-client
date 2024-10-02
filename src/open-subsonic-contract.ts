import type { AppRouter } from '@ts-rest/core';
import { initContract } from '@ts-rest/core';
import { changePassword } from '@/endpoints/change-password.js';
import { createPlaylist } from '@/endpoints/create-playlist.js';
import { createShare } from '@/endpoints/create-share.js';
import { createUser } from '@/endpoints/create-user.js';
import { deletePlaylist } from '@/endpoints/delete-playlist.js';
import { deleteShare } from '@/endpoints/delete-share.js';
import { deleteUser } from '@/endpoints/delete-user.js';
import { download } from '@/endpoints/download.js';
import { getAlbumInfo2 } from '@/endpoints/get-album-info-2.js';
import { getAlbumList2 } from '@/endpoints/get-album-list-2.js';
import { getAlbum } from '@/endpoints/get-album.js';
import { getArtistInfo2 } from '@/endpoints/get-artist-info-2.js';
import { getArtist } from '@/endpoints/get-artist.js';
import { getArtists } from '@/endpoints/get-artists.js';
import { getCoverArt } from '@/endpoints/get-cover-art.js';
import { getGenres } from '@/endpoints/get-genres.js';
import { getLyricsBySongId } from '@/endpoints/get-lyrics-by-song-id.js';
import { getLyrics } from '@/endpoints/get-lyrics.js';
import { getMusicDirectory } from '@/endpoints/get-music-directory.js';
import { getMusicFolders } from '@/endpoints/get-music-folders.js';
import { getOpenSubsonicExtensions } from '@/endpoints/get-open-subsonic-extensions.js';
import { getPlaylist } from '@/endpoints/get-playlist.js';
import { getPlaylists } from '@/endpoints/get-playlists.js';
import { getRandomSongs } from '@/endpoints/get-random-songs.js';
import { getScanStatus } from '@/endpoints/get-scan-status.js';
import { getSimilarSongs2 } from '@/endpoints/get-similar-songs-2.js';
import { getSong } from '@/endpoints/get-song.js';
import { getSongsByGenre } from '@/endpoints/get-songs-by-genre.js';
import { getStarred2 } from '@/endpoints/get-starred-2.js';
import { getTopSongs } from '@/endpoints/get-top-songs.js';
import { getUser } from '@/endpoints/get-user.js';
import { getUsers } from '@/endpoints/get-users.js';
import { ping } from '@/endpoints/ping.js';
import { scrobble } from '@/endpoints/scrobble.js';
import { search3 } from '@/endpoints/search-3.js';
import { setRating } from '@/endpoints/set-rating.js';
import { star } from '@/endpoints/star.js';
import { startScan } from '@/endpoints/start-scan.js';
import { stream } from '@/endpoints/stream.js';
import { unstar } from '@/endpoints/unstar.js';
import { updatePlaylist } from '@/endpoints/update-playlist.js';
import { updateShare } from '@/endpoints/update-share.js';
import { updateUser } from '@/endpoints/update-user.js';

const c = initContract();

export const initOpenSubsonicContract = (): AppRouter => {
    return c.router({
        changePassword,
        createPlaylist,
        createShare,
        createUser,
        deletePlaylist,
        deleteShare,
        deleteUser,
        download,
        getAlbum,
        getAlbumInfo2,
        getAlbumList2,
        getArtist,
        getArtistInfo2,
        getArtists,
        getCoverArt,
        getGenres,
        getLyrics,
        getLyricsBySongId,
        getMusicDirectory,
        getMusicFolders,
        getOpenSubsonicExtensions,
        getPlaylist,
        getPlaylists,
        getRandomSongs,
        getScanStatus,
        getSimilarSongs2,
        getSong,
        getSongsByGenre,
        getStarred2,
        getTopSongs,
        getUser,
        getUsers,
        ping,
        scrobble,
        search3,
        setRating,
        star,
        startScan,
        stream,
        unstar,
        updatePlaylist,
        updateShare,
        updateUser,
    });
};
