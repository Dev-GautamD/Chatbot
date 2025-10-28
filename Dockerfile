FROM node:22

RUN apt-get update && apt-get install -y chromium

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . . 

ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium

CMD ["node", "main.js"]
