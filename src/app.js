import express from 'express';
import { pokemonRouter } from './routes/pokemon.routes.js';

export function createApp() {
  const app = express();

  app.use(express.json());
  app.use('/api/pokemon', pokemonRouter);

  // 404
    app.use((req, res) => {
    res.status(404).json({ message: 'Not found' });
    });
  return app;
}
