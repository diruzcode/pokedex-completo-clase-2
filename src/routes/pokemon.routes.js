import { Router } from 'express';
import { PokemonController } from '../controllers/pokemon.controller.js';

export const pokemonRouter = Router();

pokemonRouter
  .post('/', PokemonController.create)
  .get('/', PokemonController.list)
  .get('/:id', PokemonController.get)
  .put('/:id', PokemonController.update)
  .delete('/:id', PokemonController.remove);
