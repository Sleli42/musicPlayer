import R from 'ramda';

class Song {
  id = 0;
  playlist = [];
  songs = [];

  load() {
    return this.songs;
  }

  add(song) {
    const newSong = {
      ...song,
      id: this.id += 1,
      dateAdded: new Date(),
      playCount: 0,
    };
    this.songs.push(newSong);
    return newSong;
  }

  getRandomSong(list) {
    return list[Math.floor(Math.random() * list.length)];
  }

  play() {
    const playlist = [...this.load()];

    const playSong = (list) => {
      const randomSong = this.getRandomSong(list);
      if (!randomSong) return;
      randomSong.playCount += 1;
      console.log(`Playing song: ${randomSong.title}`);
      this.idTimeout = setTimeout(() => {
        if (!list.length) return;
        playSong(list.filter(song => song.id !== randomSong.id));
      }, randomSong.time * 100);
    };
    playSong(playlist);
  }

  stop() {
    if (this.idTimeout) {
      clearTimeout(this.idTimeout);
    }
  }

  filterByMostRecent(sortCount) {
    const diff = (a, b) => a.dateAdded.getTime() - b.dateAdded.getTime();
    if (!sortCount) return;
    const playlist = [...this.load()];
    const sort = R.compose(R.take(sortCount), R.sort(diff));
    return sort(playlist);
  }

  filterByTop(sortCount) {
    if (!sortCount) return;
    const playlist = [...this.load()];
    const sort = R.compose(R.take(sortCount), R.reverse, R.sortBy(R.prop('rating')));
    return sort(playlist);
  }

  filterByTopPlayed(sortCount) {
    if (!sortCount) return;
    const playlist = [...this.load()];
    const sort = R.compose(R.take(sortCount), R.reverse, R.sortBy(R.prop('playCount')));
    return sort(playlist);
  }
}

export default Song;
