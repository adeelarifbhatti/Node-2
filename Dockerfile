FROM node:10

MAINTAINER adeelarifbhatti@gmail.com


WORKDIR /usr/src/app
COPY package.json .
RUN npm install
RUN npm update
COPY . .
# Following is for development
RUN npm install bower gulp wiredep gulp-inject gulp-jshint gulp-jscs jshint-stylish jshint -g
RUN bower install --allow-root --force|tee logs
#COPY public/lib/bootstrap/dist/css/bootstrap.min.css public/lib/bootstrap/dist/css/bootstrap.min.css
#CMD [ "node", "app.js" ]
CMD [ "gulp", "doneall" ]
