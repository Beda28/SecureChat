FROM node:20 as builder

WORKDIR /app

COPY package.json .
RUN npm install
COPY ./ ./
RUN npm run build

FROM nginx:alpine

EXPOSE 5173

COPY ./default.conf /etc/nginx/conf.d/default.conf 
COPY --from=builder /app/dist  /usr/share/nginx/html