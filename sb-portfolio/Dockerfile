FROM node:18-alpine

WORKDIR /sb-portfolio

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "run", "start"]