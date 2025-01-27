#DEV
FROM node:alpine AS development

WORKDIR /usr/src/app

COPY package*.json ./
COPY tailwind.config.ts tailwind.config.ts
COPY tsconfig.json tsconfig.json
COPY next.config.mjs next.config.mjs
COPY public public
COPY postcss.config.mjs postcss.config.mjs

RUN yarn install

COPY app app

RUN yarn build

CMD ["yarn","dev"]

#PRODUCTION
FROM node:alpine AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./
COPY tailwind.config.ts tailwind.config.ts
COPY tsconfig.json tsconfig.json
COPY next.config.mjs next.config.mjs
COPY public public
COPY postcss.config.mjs postcss.config.mjs
COPY build build

RUN yarn install --prod

COPY --from=development /usr/src/app/.next ./.next
COPY --from=development /usr/src/app/build ./build

COPY app app

CMD ["yarn","start"]
