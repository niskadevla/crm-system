# CRM System Project

System allows us to create users and watch their orders.
Project is hosted on [Link](https://ec2-3-75-194-76.eu-central-1.compute.amazonaws.com)

## Getting Started

1. Ensure you have Node.js installed. You can do it with the following commands:
`npm -v`
`node -v`
   We recommend Node.js version 16.19.1 and NPM v8.19.3
2. Create a free [Mongo Atlas](https://www.mongodb.com/atlas/database) database online or start a local MongoDB database.
3. Create a `server/config/config.env` file with a `MONGO_URL` property set to your MongoDB connection string.
4. In the terminal, run: `npm install`
5. Run command if we need to make PR or commit changes: `npm run prepare`

## Running the Project


1. Rename "config/config.env" to "config/config.dev.env" and add "config/config.prod.env".
   To get environment variables concerned with credentials refer to responsible person on a project.
2. Create SSL certificate running this command in the certificates' directory: `openssl req -x509 -newkey rsa:4096 -nodes -keyout key.pem -out cert.pem -days 365`
   #### ( Run in Prod mode)
3. In the terminal, run: `npm run deploy`
4. Then run: `npm run start --prefix server`
5. Or skip 3, 4 steps and run: `npm run deploy-cluster` . To run the project in prod mode with PM2. 
6. Browse to the frontend at [localhost:443](https://localhost) and log up system!
   #### (Run in Dev mode)
7. In the terminal, run: `npm run watch`
8. Browse to the frontend at [localhost:4200](https://localhost:4200) and log up system!

## Docker

1. Ensure you have the latest version of Docker installed
2. Run to create an image `make create`
3. Run to create and run a container `make run`
4. In order to stop and remove container: `make stop`
5. In order to push a new change to DockerHub (permission is required): `make push`

## Running the Tests

To run any automated tests, run `npm test`. This will: 
* Run all the client-side tests: `npm run test:client`
* Run all the server-side tests: `npm run test:server` 

- Version: 1.0.0
- License: MIT
- Author: Denys Bielishev