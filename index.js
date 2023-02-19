const { mongoConnect } = require('./frameworks/mongo/mongo-db.service')

const app = require('./app');

const port = process.env.PORT || 5000;

async function startServer() {
  await mongoConnect();

  app.listen(port, () => console.log(`Server has been started on ${port}`));
}

startServer();
