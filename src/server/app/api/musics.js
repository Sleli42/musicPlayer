import express from 'express';

const init = (ctx) => {
  const app = express();
  app.post('/musics', (req, res, next) => {
    // console.log('here');
    console.log('body: ', req.body);
    // res.json(req.body);
    res.sendStatus(200);
    next();
  });
  return app;
};

export default init;
