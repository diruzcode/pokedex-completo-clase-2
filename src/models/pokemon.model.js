import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const PokemonSchema = new Schema(
  {
    code:   { type: Number, required: true, unique: true },   // 1-150
    name:   { type: String, required: true, unique: true },
    types:  { type: [String], required: true },
    attacks:{ type: [String], default: [] },
    height: { type: Number, required: true },  // metros
    weight: { type: Number, required: true },  // kg
  },
  { timestamps: true }
);

export const Pokemon = model('Pokemon', PokemonSchema);
