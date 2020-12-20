import express from 'express';
import webpack from 'webpack';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Layout from '../frontend/components/Layout';
import serverRoutes from '../frontend/routes/serverRoutes';
import 'dotenv/config'

const app = express();

app.use(express.json());

if (process.env.ENV === 'development') {
  const webPackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webPackConfig);
  const serverConfig = { port: process.env.PORT, hot: true };
  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler, {
    log: false,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000,
  }));
} else {
  app.use((req, res, next) => {

  });
}

const setResponse = (html: string) => {
  return (
    `<!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Eduli</title>
      </head>
      <body>
        <div id="app">${html}</div>
      </body>
    </html>`
  );
};

const renderApp = async (req: express.Request, res: express.Response) => {
  const html = renderToString(
    <StaticRouter location={req.url}>
      <Layout>
        {renderRoutes(serverRoutes())}
      </Layout>
    </StaticRouter>
  );
  res.send(setResponse(html));
};

app.use(express.static(`${__dirname}/public`));
app.get('*', renderApp);

app.listen(process.env.PORT, () => {
  console.log(`${process.env.ENV} server running on Port ${process.env.PORT}`);
});

