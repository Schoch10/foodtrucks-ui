
#Pull From nginx container
FROM nginx

#Copy files
COPY ./nginx.conf /etc/nginx.conf
COPY ./dist /usr/share/nginx/html

