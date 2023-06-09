#? Project base image
FROM node:16.13.0-alpine

#? Working directory
WORKDIR /app

#? Copy the project dependency versions
COPY package.json .
COPY package-lock.json .

#? Install the project dependencies
RUN npm install 

#? Copy the source files to working directory
COPY . .

#? Expose PORT
EXPOSE 8080

#? Entrypoint
ENTRYPOINT [ "npm","run","prod:start" ]