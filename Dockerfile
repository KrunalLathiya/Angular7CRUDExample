FROM node:latest

RUN mkdir -p /app/api
RUN mkdir -p /app/dist
ADD  ./api /app/api
COPY ./dist /app/dist

WORKDIR /app/api
RUN npm install
EXPOSE 4000

CMD ["node", "server.js"]
