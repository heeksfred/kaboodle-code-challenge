FROM node:20

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN npm install -g pnpm

COPY . .

RUN pnpm install
RUN pnpm run build

EXPOSE 3000

CMD ["pnpm", "run", "start"]