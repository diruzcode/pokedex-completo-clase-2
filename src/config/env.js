import 'dotenv/config';

export const env = {
  PORT: process.env.PORT || 3000,
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/pokedex',
  REDIS_HOST: process.env.REDIS_HOST || '127.0.0.1',
  REDIS_PORT: Number(process.env.REDIS_PORT) || 6379,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY || "6379",
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || "6379",
};
