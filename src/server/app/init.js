import express from 'express';
import http from 'http';
import logger from 'morgan';
import bodyParser from 'body-parser';
import initApi from './api/init';

// const loadSongs = (song) => (req, res, next) => {
//   res.json(song.load());
// }
//
// const addSong = (song) => (req, res, next) => {
//   console.log('heree');
//   res.json(song.add(req.body));
// }

const initApp = (config, models) => {
  const { publicPath, buildPath, server } = config;
  const app = express();
  const httpServer = http.createServer(app);
  const songs = [];

  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use('/ping', (req, res) => res.json({ ping: 'pong' }));
  app.get('/api/v1/musics', (req, res, next) => {
    // /api/v1/musics?recent=5
    if (req.query.recent) {
      // console.log('here query recent');
      res.json(models.song.filterByYear());
    }
    res.json(models.song.load());
  });
  app.post('/api/v1/musics', (req, res, next) => {
    res.json(models.song.add(req.body));
  });

  httpServer.listen(server.port, server.host, () => {
    console.log(`server launch on: http://${server.host}:${server.port}/` );
  })
}

export default initApp;
