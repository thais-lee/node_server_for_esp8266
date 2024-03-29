import * as dotenv from 'dotenv';

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (envFound.error) {
  // This error should crash whole process
  throw new Error("⚠️ Couldn't find .env file ⚠️");
}

export default {
  /**
   * Server config
   */
  port: parseInt(process.env.PORT, 10),
  host: process.env.HOST,

  /**
   * Used by winston logger
   */
  logs: {
    level: process.env.LOG_LEVEL || 'silly',
  },

  /**
   * API configs
   */
  api: {
    prefix: process.env.API_PREFIX || 'api',
    thinkspeak: {
      read: process.env.TSK_READ_KEY,
      write: process.env.TSK_WRITE_KEY,
      channel_id: process.env.TSK_CHANNEL_ID,
      endpoint: process.env.TSK_ENDPOINT,
    },
  },

  /**
   * App constants
   */
};
