FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./
COPY tsconfig.base.json ./

COPY client/package*.json client/
RUN npm run install-client --only=production

COPY server/package*.json server/
RUN npm run install-server

COPY server/ server/
CMD ["mkdir", "logs"]
RUN npm run build:server

COPY client/ client/
RUN npm run build:client

USER node

CMD ["npm", "run", "cluster"]

EXPOSE 5000