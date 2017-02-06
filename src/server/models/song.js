import dateFns from 'date-fns';
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
      dateAdded: new Date().toISOString().slice(0, 19),
      playCount: 0,
    };
    this.songs.push(newSong);
    return newSong;
  }

  getRandomSong(list) {
    return list[Math.floor(Math.random() * list.length)];
  }

  play() {
    console.log('STart playing music');
    const playlist = [...this.load()];

    const playSong = list => {
      const randomSong = this.getRandomSong(list);
      randomSong.playCount += 1;
      console.log(`Playing song: ${randomSong.title}`);
      this.idTimeout = setTimeout(() => {
        if (!list.length) return;
        playSong(list.filter(song => song.id !== randomSong.id));
      }, randomSong.time * 1000);
    }
    playSong(playlist);
  }

  stop() {
    if (this.idTimeout) {
      console.log('Stop playing music');
      clearTimeout(this.idTimeout);
    }
  }

  filterByTopPlayed(sortCount) {
    const playlist = [...this.load()];
    const sort = R.compose(R.take(sortCount), R.sort(R.descend(R.prop('playCount'))));
    return sort(playlist);
  }
}

export default Song;
