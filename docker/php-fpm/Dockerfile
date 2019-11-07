FROM php:7.3-fpm

ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get update \
    && apt-get -y --no-install-recommends install \
     libicu-dev \
     libpng-dev \
     libzip-dev \
     zlib1g-dev \
     zip \
     unzip \
     git \
     curl \
     locales \
     nano \
    && apt-get clean; rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /usr/share/doc/*

RUN docker-php-ext-install pdo_mysql mbstring zip exif bcmath gd intl opcache

RUN pecl install xdebug \
    && docker-php-ext-enable xdebug

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
