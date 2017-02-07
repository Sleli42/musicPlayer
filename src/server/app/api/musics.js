import express from 'express';

const loadSongs = song => (req, res) => {
  if (req.query.topPlayed) {
    res.json(song.filterByTopPlayed(req.query.topPlayed));
  } if (req.query.top) {
    res.json(song.filterByTop(req.query.top));
  } if (req.query.recent) {
    res.json(song.filterByMostRecent(req.query.recent));
  } else {
    res.json(song.load());
  }
};

const addSongs = song => (req, res) => {
  res.json(song.add(req.body));
};

const playSongs = song => (req, res) => {
  song.play();
  res.sendStatus(200);
};

const stopSongs = song => (req, res) => {
  song.stop();
  res.sendStatus(200);
};

const init = (ctx, models) => {
  const app = express();

  app.get('/', loadSongs(models.song));
  app.get('/play', playSongs(models.song));
  app.get('/stop', stopSongs(models.song));
  app.post('/', addSongs(models.song));
  return app;
};

export default init;
