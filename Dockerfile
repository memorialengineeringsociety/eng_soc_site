FROM node:16 AS builder
WORKDIR /app
COPY . .
RUN npm install && npm run build && npm run export

FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/out .
ENTRYPOINT ["nginx", "-g", "daemon off;"]