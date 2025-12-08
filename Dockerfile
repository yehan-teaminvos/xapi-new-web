FROM nginx:1.20.2

WORKDIR /usr/share/nginx/html

COPY out/ .
