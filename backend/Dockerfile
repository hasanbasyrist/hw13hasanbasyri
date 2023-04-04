# Base image
FROM node:14-alpine

# Working directory
WORKDIR /app

# Copying dependencies
COPY package*.json ./

# Installing dependencies
RUN npm install

# Copying source code
COPY . .

# Exposing port 8000
EXPOSE 8000

# Running the app
CMD [ "node", "index.js" ]
