# CRM System Project

System allows us to create users and watch their orders.
## Getting Started

1. Ensure you have Node.js installed. You can do it with the following commands:
`npm -v`
`node -v`
   We recommend Node.js version 16.19.1 and NPM v8.19.3
2. Create a free [Mongo Atlas](https://www.mongodb.com/atlas/database) database online or start a local MongoDB database.
3. Create a `server/config/config.env` file with a `MONGO_URL` property set to your MongoDB connection string.
4. In the terminal, run: `npm install`

## Running the Project

1. In the terminal, run: `npm run deploy`
2. Browse to the frontend at [localhost:5000](http://localhost:5000) and log up system!

## Docker

1. Ensure you have the latest version of Docker installed
2. Run `docker build -t node-js_with_angular .`
3. Run `docker run -it -p 5000:5000 node-js_with_angular`

## Running the Tests

To run any automated tests, run `npm test`. This will: 
* Run all the client-side tests: `npm test --prefix client`
* Run all the server-side tests: `npm test --prefix server` 
