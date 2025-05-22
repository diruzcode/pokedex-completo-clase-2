import { PokemonRepository } from '../repositories/pokemon.repository.js';

export const PokemonService = {
  async create(data) {
    const created = await PokemonRepository.create(data);
    return created;
  },

  async findAll() {
    const list = await PokemonRepository.findAll();
    return list;
  },

  async findById(id) {
    const pokemon = await PokemonRepository.findById(id);
    return pokemon;
  },

  async update(id, data) {
    const updated = await PokemonRepository.update(id, data);
    return updated;
  },

  async remove(id) {
    const removed = await PokemonRepository.remove(id);
    return removed;
  },
};
