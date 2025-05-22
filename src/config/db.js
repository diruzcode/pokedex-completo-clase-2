import mongoose from 'mongoose';
import { env } from './env.js';

export async function connectMongo() {
  await mongoose.connect(env.MONGO_URI);
  console.log('✅ Mongo conectado');
}
