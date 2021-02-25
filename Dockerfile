FROM node:15

WORKDIR /javanag
COPY package.json .
RUN yarn global add gatsby-cli
RUN yarn install
COPY gatsby-config.js .
EXPOSE 8000

CMD ["gatsby", "develop", "-H", "0.0.0.0"]
