FROM node:alpine
ARG REACT_APP="stop"

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN printenv
EXPOSE 8080
ENTRYPOINT [ "node", "index.js"]