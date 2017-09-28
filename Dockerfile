FROM node:boron

MAINTAINER adeelarifbhatti@gmail.com


WORKDIR /usr/src/app
COPY package.json .
RUN npm install

COPY . .


CMD [ "node", "app.js" ]
