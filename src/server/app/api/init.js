import express from 'express';
import initMusics from './musics';

const init = (ctx) => {
  const app = express();
  app.use('/v1', initMusics(ctx));
  return app;
};

export default init;
