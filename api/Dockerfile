FROM node:20

RUN mkdir -p /usr/src/api
WORKDIR /usr/src/api

RUN npm install -g pnpm

COPY . .

RUN pnpm install
RUN pnpm run build

EXPOSE 5000

CMD ["pnpm", "run", "serve"]