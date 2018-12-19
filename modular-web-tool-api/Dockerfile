FROM node:8

RUN apt-get -y update \
  && apt-get install -y git

RUN npm install -g nodemon
WORKDIR /app

EXPOSE 5000

USER node

CMD ["npm", "run dev"]