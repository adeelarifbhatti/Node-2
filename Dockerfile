FROM node:boron

MAINTAINER adeelarifbhatti@gmail.com


WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm update
# Following is for development
RUN npm install bower gulp wiredep gulp-inject gulp-jshint gulp-jscs jshint-stylish jshint -g
RUN bower install --allow-root |tee logs

#CMD [ "node", "app.js" ]
CMD [ "gulp", "doneall" ]
