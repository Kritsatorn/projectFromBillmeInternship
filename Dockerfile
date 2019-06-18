FROM nginx:latest
MAINTAINER Tek <justice.form@gmail.com>

RUN apt-get update && apt-get install curl gnupg gnupg2 gnupg1 -y

RUN curl -sL https://deb.nodesource.com/setup_6.x | bash - \
    && curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
    && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN apt-get update && apt-get install curl nodejs yarn -y

ENV TZ=Asia/Bangkok
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

ADD . /usr/share/nginx/app

COPY nginx.conf /etc/nginx/nginx.conf

RUN cd /usr/share/nginx/app \
    && yarn install \
    && yarn run build \
    && rm -rf   /usr/share/nginx/html \
    && cp -rf /usr/share/nginx/app/build /usr/share/nginx/html/
