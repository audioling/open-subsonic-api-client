import { extendZodWithOpenApi } from '@anatine/zod-openapi';
import { initContract } from '@ts-rest/core';
import { z } from 'zod';
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
import { getIndexes } from '@/endpoints/get-indexes.js';
import { getInternetRadioStations } from '@/endpoints/get-internet-radio-stations.js';
import { getLicense } from '@/endpoints/get-license.js';
import { getLyricsBySongId } from '@/endpoints/get-lyrics-by-song-id.js';
import { getLyrics } from '@/endpoints/get-lyrics.js';
import { getMusicDirectory } from '@/endpoints/get-music-directory.js';
import { getMusicFolders } from '@/endpoints/get-music-folders.js';
import { getNewestPodcasts } from '@/endpoints/get-newest-podcasts.js';
import { getNowPlaying } from '@/endpoints/get-now-playing.js';
import { getOpenSubsonicExtensions } from '@/endpoints/get-open-subsonic-extensions.js';
import { getPlayQueue } from '@/endpoints/get-play-queue.js';
import { getPlaylist } from '@/endpoints/get-playlist.js';
import { getPlaylists } from '@/endpoints/get-playlists.js';
import { getPodcasts } from '@/endpoints/get-podcasts.js';
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
import { refreshPodcasts } from '@/endpoints/refresh-podcasts.js';
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

extendZodWithOpenApi(z);

const c = initContract();

export const openApiContract = c.router({
    addChatMessage: addChatMessage.os['1'].get,
    changePassword: changePassword.os['1'].get,
    createBookmark: createBookmark.os['1'].get,
    createInternetRadioStation: createInternetRadioStation.os['1'].get,
    createPlaylist: createPlaylist.os['1'].get,
    createPodcastChannel: createPodcastChannel.os['1'].get,
    createShare: createShare.os['1'].get,
    createUser: createUser.os['1'].get,
    deleteBookmark: deleteBookmark.os['1'].get,
    deleteInternetRadioStation: deleteInternetRadioStation.os['1'].get,
    deletePlaylist: deletePlaylist.os['1'].get,
    deletePodcastChannel: deletePodcastChannel.os['1'].get,
    deletePodcastEpisode: deletePodcastEpisode.os['1'].get,
    deleteShare: deleteShare.os['1'].get,
    deleteUser: deleteUser.os['1'].get,
    download: download.os['1'].get,
    downloadPodcastEpisode: downloadPodcastEpisode.os['1'].get,
    getAlbum: getAlbum.os['1'].get,
    getAlbumInfo: getAlbumInfo.os['1'].get,
    getAlbumInfo2: getAlbumInfo2.os['1'].get,
    getAlbumList: getAlbumList.os['1'].get,
    getAlbumList2: getAlbumList2.os['1'].get,
    getArtist: getArtist.os['1'].get,
    getArtistInfo: getArtistInfo.os['1'].get,
    getArtistInfo2: getArtistInfo2.os['1'].get,
    getArtists: getArtists.os['1'].get,
    getAvatar: getAvatar.os['1'].get,
    getBookmarks: getBookmarks.os['1'].get,
    getCaptions: getCaptions.os['1'].get,
    getChatMessages: getChatMessages.os['1'].get,
    getCoverArt: getCoverArt.os['1'].get,
    getGenres: getGenres.os['1'].get,
    getIndexes: getIndexes.os['1'].get,
    getInternetRadioStations: getInternetRadioStations.os['1'].get,
    getLicense: getLicense.os['1'].get,
    getLyrics: getLyrics.os['1'].get,
    getLyricsBySongId: getLyricsBySongId.os['1'].get,
    getMusicDirectory: getMusicDirectory.os['1'].get,
    getMusicFolders: getMusicFolders.os['1'].get,
    getNewestPodcasts: getNewestPodcasts.os['1'].get,
    getNowPlaying: getNowPlaying.os['1'].get,
    getOpenSubsonicExtensions: getOpenSubsonicExtensions.os['1'].get,
    getPlayQueue: getPlayQueue.os['1'].get,
    getPlaylist: getPlaylist.os['1'].get,
    getPlaylists: getPlaylists.os['1'].get,
    getPodcasts: getPodcasts.os['1'].get,
    getRandomSongs: getRandomSongs.os['1'].get,
    getScanStatus: getScanStatus.os['1'].get,
    getShares: getShares.os['1'].get,
    getSimilarSongs: getSimilarSongs.os['1'].get,
    getSimilarSongs2: getSimilarSongs2.os['1'].get,
    getSong: getSong.os['1'].get,
    getSongsByGenre: getSongsByGenre.os['1'].get,
    getStarred: getStarred.os['1'].get,
    getStarred2: getStarred2.os['1'].get,
    getTopSongs: getTopSongs.os['1'].get,
    getUser: getUser.os['1'].get,
    getUsers: getUsers.os['1'].get,
    getVideoInfo: getVideoInfo.os['1'].get,
    getVideos: getVideos.os['1'].get,
    hls: hls.os['1'].get,
    jukeboxControl: jukeboxControl.os['1'].get,
    ping: ping.os['1'].get,
    refreshPodcasts: refreshPodcasts.os['1'].get,
    savePlayQueue: savePlayQueue.os['1'].get,
    scrobble: scrobble.os['1'].get,
    search2: search2.os['1'].get,
    search3: search3.os['1'].get,
    setRating: setRating.os['1'].get,
    star: star.os['1'].get,
    startScan: startScan.os['1'].get,
    stream: stream.os['1'].get,
    tokenInfo: tokenInfo.os['1'].get,
    unstar: unstar.os['1'].get,
    updateInternetRadioStation: updateInternetRadioStation.os['1'].get,
    updatePlaylist: updatePlaylist.os['1'].get,
    updateShare: updateShare.os['1'].get,
    updateUser: updateUser.os['1'].get,
});
