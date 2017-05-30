FROM node:alpine

WORKDIR /tmp
COPY package.json /tmp/
RUN yarn install --pure-lockfile

WORKDIR /var/www/edic-site
RUN cp -a /tmp/node_modules /var/www/edic-site/
RUN ls node_modules/

EXPOSE 8383

CMD ["yarn", "run", "dev"]
