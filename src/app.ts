import 'reflect-metadata';
import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import Logger from './loaders/logger';
import config from './config/index';
import socket from '@src/features/socket';

export const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {});

export async function startServer() {
  /**
   * Import/Export can only be used in 'top-level code' at least in node 10 without babel.
   * So we are using old require.
   */
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  await require('./loaders').default({ expressApp: app });

  httpServer.listen(config.port, () => {
    Logger.info(`🚀 Server listening on port: ${config.port}...`);
  });

  socket({ io });
}

if (process.env.NODE_ENV !== 'test') {
  startServer();
}
