import mongoose from 'mongoose';

import { ENV_CONFIG } from '../../env-config';

mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
  console.error(err);
});

export async function mongoConnect(): Promise<void> {
  await mongoose.connect(ENV_CONFIG.mongoURI);
}

export async function mongoDisconnect(): Promise<void> {
  await mongoose.disconnect();
}
