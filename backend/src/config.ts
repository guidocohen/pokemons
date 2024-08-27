import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    port: parseInt(process.env.API_PORT, 10) || 3000,
    apiKey: process.env.API_KEY,
    nodeEnv: process.env.NODE_ENV,
    sqlite: {
      dbPath: process.env.SQLITE_DB_PATH,
    },
  };
});
