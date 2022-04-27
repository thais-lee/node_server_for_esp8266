import 'reflect-metadata';
import express from 'express';

import Logger from './loaders/logger';
import config from './config/index';
export const app = express();

export async function startServer() {
  /**
   * Import/Export can only be used in 'top-level code' at least in node 10 without babel.
   * So we are using old require.
   */
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  await require('./loaders').default({ expressApp: app });

  app.listen(config.port, () => {
    Logger.info(`🚀 Server listening on port: ${config.port}...`);
  });
}

if (process.env.NODE_ENV !== 'test') {
  startServer();
}
