FROM node:20-alpine

WORKDIR /app

COPY . .

RUN npm i

RUN npm install -g nodemon

EXPOSE 3030


CMD ["nodemon","index.js"]
