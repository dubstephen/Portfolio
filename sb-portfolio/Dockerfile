FROM node:18-alpine

WORKDIR /sb-portfolio

COPY package.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]