function make_album(artistName, albumTitle, tracks = 0) {
    if (tracks > 0) {
        return musicAlbum = {
            artistName: artistName,
            albumtitle: albumTitle,
            tracks: tracks,
        }
    } else {
        return musicAlbum = {
            artistName: artistName,
            albumtitle: albumTitle,
        }
    }
}
console.log(make_album('Jamshed', 'Mine'));
console.log(make_album('Jamshed', 'Mine','5'));