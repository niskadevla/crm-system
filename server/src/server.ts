import { mongoConnect } from './middleware/mongo/mongo-db.service';
import { app } from './app';

const PORT = process.env.PORT || 5000;

async function startServer() {
  await mongoConnect();

  app.listen(PORT, () => console.log(`Server has been started on ${PORT}`));
}

startServer();
