FROM node:18-alpine

WORKDIR /sb-portfolio

COPY package.json ./

RUN npm install
RUN npm run build

COPY . .

CMD ["npm", "run", "start"]