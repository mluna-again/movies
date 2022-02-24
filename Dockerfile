FROM node:16-alpine

WORKDIR /app

ENV NODE_PORT=4000
EXPOSE 4000

COPY ./package.json ./package.json
COPY ./yarn.lock ./yarn.lock

RUN yarn install

COPY . .

CMD ["yarn", "start"]
