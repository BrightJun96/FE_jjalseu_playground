#DEV
FROM node:alpine AS development

WORKDIR /usr/src/app

COPY package*.json ./
COPY tailwind.config.ts tailwind.config.ts
COPY tsconfig.json tsconfig.json
COPY next.config.mjs next.config.mjs
COPY public public
COPY postcss.config.mjs postcss.config.mjs
COPY app app

RUN yarn install
RUN yarn build

CMD ["yarn","dev"]

#PRODUCTION
FROM node:alpine AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

#COPY package*.json ./
#COPY tailwind.config.ts tailwind.config.ts
#COPY tsconfig.json tsconfig.json
#COPY next.config.mjs next.config.mjs
#COPY public public
#COPY postcss.config.mjs postcss.config.mjs
#COPY build build
COPY --from=development /usr/src/app/package*.json ./
COPY --from=development /usr/src/app/tailwind.config.ts tailwind.config.ts
COPY --from=development /usr/src/app/tsconfig.json tsconfig.json
COPY --from=development /usr/src/app/next.config.mjs next.config.mjs
COPY --from=development /usr/src/app/public public
COPY --from=development /usr/src/app/postcss.config.mjs postcss.config.mjs
#COPY --from=development /usr/src/app/build ./build
COPY --from=development /usr/src/app/.next ./.next
COPY --from=development /usr/src/app/app ./app

RUN yarn install --prod

#COPY --from=development /usr/src/app/.next ./.next
#COPY --from=development /usr/src/app/build ./build

#COPY app app

RUN #yarn build

CMD ["yarn","start"]
