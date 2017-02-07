import fs from 'fs';
import 'universal-fetch';

const FILE = '../../uploads/music.csv';
const url = 'http://0.0.0.0:3004/api/v1/musics';

const makeSong = (line) => {
  const [title, genre, artist, album, time, year, rating] = line.slice(0, -1).split(',');
  return { title, genre, artist, album, time, year, rating };
};

const loadSong = (song) => {
  const body = JSON.stringify(song);
  const headers = { 'Content-Type': 'application/json' };
  const options = { headers, method: 'POST', body };
  return fetch(url, options).then(res => res.json());
};

const makeRequests = songs => songs.map(loadSong);

fs.readFile(FILE, 'utf-8', (err, data) => {
  if (err) {
    return console.error(err);
  }
  const lines = data.split('\n').slice(1);
  const songs = lines.map(makeSong);
  const requests = makeRequests(songs);
  return Promise.all(requests)
    .then(songsList => console.log('songs loaded: ', songsList))
    .catch(error => console.error(`Cannot load songs: ${error}`));
});
