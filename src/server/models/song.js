import dateFns from 'date-fns';
import R from 'ramda';

class Song {
  id = 0;
  // playCount = 0;
  songs = [];

  load() {
    // console.log(this.songs);
    return this.songs;
  }

  add(song) {
    if (song.title === 'title') {
      return song;
    }
    const newSong = {
      id: this.id += 1,
      dateAdded: dateFns.format(new Date(), 'MM/DD/YYYY'),
      playCount: 0,
      ...song
    };
    // console.log('newSong§:', newSong);
    // console.log('dateFns: ', dateFns.format(new Date(), 'MM/DD/YYYY'));
    this.songs.push(newSong);
    return newSong;
  }

  filterByYear() {
    const filtered = this.songs;
    const sortByYear = R.compose(R.take(5), R.sort(R.descend(R.prop('year'))));
    // sortByYear(filtered);
    // const yfilter = R.prop('year');
    // console.log('filtered: ', sortByYear(filtered));
    return sortByYear(filtered);
  }
}

export default Song;
