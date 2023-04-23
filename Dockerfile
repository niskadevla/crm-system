FROM node:16.14.2-alpine

WORKDIR /app

COPY package*.json ./
COPY tsconfig.base.json ./

COPY client/package*.json client/
RUN npm run install-client --only=production

COPY server/package*.json server/
RUN npm run install-server

COPY server/ server/
RUN npm run build:server

COPY client/ client/
RUN npm run build:client

#remove devDependencies
RUN npm prune --production

VOLUME ["/app/server/uploads"]

#USER node

CMD ["npm", "run", "start", "--prefix", "server"]

EXPOSE 5000