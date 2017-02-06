import express from 'express';
import http from 'http';
import logger from 'morgan';
import bodyParser from 'body-parser';
import initApi from './api/init';

const initApp = (config, models) => {
  const { server } = config;
  const app = express();
  const httpServer = http.createServer(app);

  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use('/ping', (req, res) => res.json({ ping: 'pong' }));
  app.get('/api/v1/musics', (req, res, next) => {
    if (req.query.topPlayed) {
      res.json(models.song.filterByTopPlayed(req.query.topPlayed));
      // res.sendStatus(200);
    }
    else {
      res.json(models.song.load());
    }
  });
  app.post('/api/v1/musics', (req, res, next) => {
    res.json(models.song.add(req.body));
  });
  app.get('/api/v1/musics/play', (req, res, next) => {
    models.song.play();
    res.sendStatus(200);
  });
  app.get('/api/v1/musics/stop', (req, res, next) => {
    models.song.stop();
    res.sendStatus(200);
  });
  httpServer.listen(server.port, server.host, () => {
    console.log(`server launch on: http://${server.host}:${server.port}/` );
  })
}

export default initApp;
