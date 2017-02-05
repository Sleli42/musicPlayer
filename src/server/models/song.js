class Song {
  songs = [];

  load() {
    // console.log(this.songs);
    return this.songs;
  }

  add(song) {
    this.songs.push(song);
    return song;
  }
}

export default Song;
