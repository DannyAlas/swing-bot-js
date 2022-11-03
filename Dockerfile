FROM node:latest

WORKDIR /usr/src/app
ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "node", "main.js" ]