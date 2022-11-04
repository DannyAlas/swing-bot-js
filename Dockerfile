FROM node:latest
ARG TOKEN
WORKDIR /usr/src/app
ENV TOKEN=$TOKEN

COPY package*.json ./
RUN npm install
COPY . .

CMD [ "node", "main.js" ]