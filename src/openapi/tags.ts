export enum OpenApiTag {
    ALBUM_SONG_LISTS = 'Album/Song Lists',
    BOOKMARKS = 'Bookmarks',
    BROWSING = 'Browsing',
    CHAT = 'Chat',
    INTERNET_RADIO = 'Internet Radio',
    JUKEBOX = 'Jukebox',
    MEDIA_ANNOTATION = 'Media Annotation',
    MEDIA_LIBRARY_SCANNING = 'Media Library Scanning',
    MEDIA_RETRIEVAL = 'Media Retrieval',
    PLAYLISTS = 'Playlists',
    PODCAST = 'Podcast',
    SEARCHING = 'Searching',
    SHARING = 'Sharing',
    SYSTEM = 'System',
    USER_MANAGEMENT = 'User Management',
}

const system = {
    routes: ['/ping.view', '/getLicense.view', '/getOpenSubsonicExtensions.view'],
    tag: OpenApiTag.SYSTEM,
};

const browsing = {
    routes: [
        '/getMusicFolders.view',
        '/getIndexes.view',
        '/getMusicDirectory.view',
        '/getGenres.view',
        '/getArtists.view',
        '/getArtist.view',
        '/getAlbum.view',
        '/getSong.view',
        '/getVideos.view',
        '/getVideoInfo.view',
        '/getArtistInfo.view',
        '/getArtistInfo2.view',
        '/getAlbumInfo.view',
        '/getAlbumInfo2.view',
        '/getSimilarSongs.view',
        '/getSimilarSongs2.view',
        '/getTopSongs.view',
    ],
    tag: OpenApiTag.BROWSING,
};

const albumSonglists = {
    routes: [
        '/getAlbumList.view',
        '/getAlbumList2.view',
        '/getRandomSongs.view',
        '/getSongsByGenre.view',
        '/getNowPlaying.view',
        '/getStarred.view',
        '/getStarred2.view',
    ],
    tag: OpenApiTag.ALBUM_SONG_LISTS,
};

const searching = {
    routes: ['/search2.view', '/search3.view'],
    tag: OpenApiTag.SEARCHING,
};

const playlists = {
    routes: [
        '/getPlaylists.view',
        '/getPlaylist.view',
        '/createPlaylist.view',
        '/updatePlaylist.view',
        '/deletePlaylist.view',
    ],
    tag: OpenApiTag.PLAYLISTS,
};

const mediaRetrieval = {
    routes: [
        '/stream.view',
        '/download.view',
        '/hls.view',
        '/getCaptions.view',
        '/getCoverArt.view',
        '/getLyrics.view',
        '/getLyricsBySongId.view',
        '/getAvatar.view',
    ],
    tag: OpenApiTag.MEDIA_RETRIEVAL,
};

const mediaAnnotation = {
    routes: ['/star.view', '/unstar.view', '/setRating.view', '/scrobble.view'],
    tag: OpenApiTag.MEDIA_ANNOTATION,
};

const sharing = {
    routes: ['/getShares.view', '/createShare.view', '/updateShare.view', '/deleteShare.view'],
    tag: OpenApiTag.SHARING,
};

const podcast = {
    routes: [
        '/getPodcasts.view',
        '/getNewestPodcasts.view',
        '/refreshPodcasts.view',
        '/createPodcastChannel.view',
        '/deletePodcastChannel.view',
        '/deletePodcastEpisode.view',
        '/downloadPodcastEpisode.view',
    ],
    tag: OpenApiTag.PODCAST,
};

const jukebox = {
    routes: ['/jukeboxControl.view'],
    tag: OpenApiTag.JUKEBOX,
};

const internetRadio = {
    routes: [
        '/getInternetRadioStations.view',
        '/createInternetRadioStation.view',
        '/updateInternetRadioStation.view',
        '/deleteInternetRadioStation.view',
    ],
    tag: OpenApiTag.INTERNET_RADIO,
};

const chat = {
    routes: ['/addChatMessage.view', '/getChatMessages.view'],
    tag: OpenApiTag.CHAT,
};

const userManagement = {
    routes: [
        '/getUser.view',
        '/getUsers.view',
        '/createUser.view',
        '/updateUser.view',
        '/deleteUser.view',
        '/changePassword.view',
        '/tokenInfo.view',
    ],
    tag: OpenApiTag.USER_MANAGEMENT,
};

const bookmarks = {
    routes: [
        '/getBookmarks.view',
        '/createBookmark.view',
        '/deleteBookmark.view',
        '/getPlayQueue.view',
        '/savePlayQueue.view',
    ],
    tag: OpenApiTag.BOOKMARKS,
};

const mediaLibraryScanning = {
    routes: ['/getScanStatus.view', '/startScan.view'],
    tag: OpenApiTag.MEDIA_LIBRARY_SCANNING,
};

export const OpenApiTagMapper = {
    ...Object.fromEntries(system.routes.map((route) => [route, system.tag])),
    ...Object.fromEntries(browsing.routes.map((route) => [route, browsing.tag])),
    ...Object.fromEntries(albumSonglists.routes.map((route) => [route, albumSonglists.tag])),
    ...Object.fromEntries(searching.routes.map((route) => [route, searching.tag])),
    ...Object.fromEntries(playlists.routes.map((route) => [route, playlists.tag])),
    ...Object.fromEntries(mediaRetrieval.routes.map((route) => [route, mediaRetrieval.tag])),
    ...Object.fromEntries(mediaAnnotation.routes.map((route) => [route, mediaAnnotation.tag])),
    ...Object.fromEntries(sharing.routes.map((route) => [route, sharing.tag])),
    ...Object.fromEntries(podcast.routes.map((route) => [route, podcast.tag])),
    ...Object.fromEntries(jukebox.routes.map((route) => [route, jukebox.tag])),
    ...Object.fromEntries(internetRadio.routes.map((route) => [route, internetRadio.tag])),
    ...Object.fromEntries(chat.routes.map((route) => [route, chat.tag])),
    ...Object.fromEntries(userManagement.routes.map((route) => [route, userManagement.tag])),
    ...Object.fromEntries(bookmarks.routes.map((route) => [route, bookmarks.tag])),
    ...Object.fromEntries(
        mediaLibraryScanning.routes.map((route) => [route, mediaLibraryScanning.tag]),
    ),
};
