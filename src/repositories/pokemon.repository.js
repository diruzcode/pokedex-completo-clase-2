import { Pokemon } from '../models/pokemon.model.js';

export const PokemonRepository = {
  create: (data) => Pokemon.create(data),
  findAll: () => Pokemon.find().lean(),
  findById: (id) => Pokemon.findById(id).lean(),
  update: (id, data) => Pokemon.findByIdAndUpdate(id, data, { new: true }).lean(),
  remove: (id) => Pokemon.findByIdAndDelete(id).lean(),
};
