# Here we're using alpine to get a small image
FROM node:16-alpine

# Loading our port as ENV
ENV PORT 3000

# Creating the app folder and setting up as WORKDIR
RUN mkdir /app
WORKDIR /app

# Getting package.json and others to install all the required Node packages
COPY package*.json /app/
RUN npm install

# Copying and building our app to production
COPY . /app/
RUN npm run build

# Finally, exposing and running our app inside our container
EXPOSE 3000
CMD "npm" "start"