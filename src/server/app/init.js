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
  app.use('/api/v1', initApi(app, models));

  httpServer.listen(server.port, server.host, () => {
    console.log(`server launch on: http://${server.host}:${server.port}/`);
  });
};

export default initApp;
