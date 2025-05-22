import { createApp } from './app.js';
import { connectMongo } from './config/db.js';
import { env } from './config/env.js';

(async () => {
  await connectMongo();
  const app = createApp();
  app.listen(env.PORT, () =>
    console.log(`🚀 API lista en http://localhost:${env.PORT}`)
  );
})();
