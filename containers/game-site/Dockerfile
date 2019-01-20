FROM nginx:alpine

COPY assets/ /usr/share/nginx/html/assets/
COPY src/ /usr/share/nginx/html/src/
COPY index.html /usr/share/nginx/html/index.html

COPY nginx_config.conf /etc/nginx/conf.d/default.conf
