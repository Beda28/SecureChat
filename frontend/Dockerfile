FROM node:20 as builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install
COPY ./ ./
RUN chmod +x node_modules/.bin/* && npm run build

FROM node:20 as runtime

RUN groupadd -r appgroup && useradd -r -g appgroup -m -s /bin/bash appuser
WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER appuser

CMD ["node", "dist/server.js"]



FROM nginx:alpine

EXPOSE 5173

COPY ./default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist  /usr/share/nginx/html
