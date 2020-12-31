FROM node:current-slim

# set working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# copy file from host to your current location
COPY package.json .

# run the command inside your image filesystem
RUN npm install

# add metadata to the image to describe which port the container is listening on at runtime
EXPOSE 8080

# run specified cmd within the container
CMD [ "npm", "start" ]

# copy the rest of the app's source code from host to image filesystem
COPY . .
