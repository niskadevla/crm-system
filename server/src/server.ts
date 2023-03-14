import * as https from 'https';
import * as fs from 'fs';
import path from 'path';

import { mongoConnect } from './middleware/mongo/mongo-db.service';
import { app } from './app';
import { ENV_CONFIG } from './env-config';
import { NodeEnvEnums } from './utils';

const PORT = process.env.PORT || 5000;

async function startServer() {
  const certPath = ENV_CONFIG.env === NodeEnvEnums.Prod ? ['..', '..', '..', 'certificates'] : ['..', 'certificates'];

  await mongoConnect();

  https
    .createServer(
      {
        key: fs.readFileSync(path.join(__dirname, ...certPath, 'key.pem')),
        cert: fs.readFileSync(path.join(__dirname, ...certPath, 'cert.pem'))
      },
      app
    )
    .listen(PORT, () => console.log(`Server has been started on ${PORT}`));
}

startServer();
