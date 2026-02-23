FROM node:22-alpine

WORKDIR /app

COPY container/server.mjs /app/server.mjs

EXPOSE 8080
ENV PORT=8080

CMD ["node", "/app/server.mjs"]
