var path = require('path');
var fs = require('fs');
var readline = require('readline');
var exec = require('child_process').exec;

const createSong = split => {
  const song = {};

  song.title = split[0];
  song.genre = split[1];
  song.artist = split[2];
  song.album = split[3];
  song.time = split[4];
  song.year = split[5];
  song.rating = split[6];
  return song;
}

const rl = readline.createInterface({
  input: fs.createReadStream(path.join(__dirname, '../../uploads/music.csv')),
});
rl.on('line', (input) => {
  const split = input.split(",");
  const song = JSON.stringify(createSong(split));
  var args = `-X POST -H 'Content-Type: application/json' -d '${song}' http://0.0.0.0:3004/api/v1/musics`;

  exec('curl ' + args, function (error, stdout, stderr) {
    if (error) {
      console.log('exec error: ' + error);
    }
  });
});
