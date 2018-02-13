FROM nginx

COPY index.html /usr/share/nginx/html/
RUN mkdir -p /usr/share/nginx/html/css
COPY css /usr/share/nginx/html/css/
RUN mkdir -p /usr/share/nginx/html/js
COPY js /usr/share/nginx/html/js/
