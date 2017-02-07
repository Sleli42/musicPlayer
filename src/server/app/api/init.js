import express from 'express';
import initMusics from './musics';

const init = (ctx, models) => {
  const app = express();
  app.use('/musics', initMusics(ctx, models));
  return app;
};

export default init;
