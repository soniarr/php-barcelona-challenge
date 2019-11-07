export UID
export GID

build:
	$(info Make: Building environment images.)
	@docker-compose up -d --build

start:
	$(info Make: Start docker containers.)
	@docker-compose up -d
	@echo 'ok'

stop:
	$(info Make: Stop docker containers.)
	@docker-compose stop

composer-install:
	$(info Make: Install composer dependencies.)
	@docker-compose run bcn-challenge-php bash -c "composer install"

install:
	@make -s build
	@make -s composer-install
