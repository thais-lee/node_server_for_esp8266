import expressLoader from './express';
import Logger from './logger';
export default async ({ expressApp }) => {
  const runMode = process.env.NODE_ENV;
  Logger.info(`✅ Server is running on [${runMode.toUpperCase()}] mode.`);
  await expressLoader({ app: expressApp });
  Logger.info('✅ Express loaded.');
};
