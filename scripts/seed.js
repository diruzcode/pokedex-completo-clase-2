// scripts/seed-150.js
import fetch from 'node-fetch';
import { connectMongo } from '../src/config/db.js';
import { Pokemon } from '../src/models/pokemon.model.js';

async function getPokemon(id) {
  const res  = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();

  // Construir documento Mongo
  return {
    code:    data.id,               // 1…150
    name:    data.name,             // bulbasaur
    types:   data.types.map(t => t.type.name),               // ["grass","poison"]
    attacks: data.moves             // MUCHOS movimientos,
              .slice(0, 4)          //   nos quedamos con los 4 primeros
              .map(m => m.move.name),                         // ["razor-wind",…]
    weight:  data.weight / 10,      // hectogr → kg
    height:  data.height / 10,      // decímetro → metros
  };
}

async function seed() {
  await connectMongo();
  console.log('⬇️  Descargando info de PokeAPI…');

  const docs = [];
  for (let id = 1; id <= 150; id++) {
    docs.push(await getPokemon(id));
  }

  await Pokemon.deleteMany({});
  await Pokemon.insertMany(docs);
  console.log(`✅ Insertados ${docs.length} pokemones (1-150)`);
  process.exit(0);
}

seed().catch(console.error);
