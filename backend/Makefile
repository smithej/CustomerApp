SERVICE_NAME ?= api

build:
	docker-compose build

up:
	docker-compose up --detach

attach:
	docker-compose up

down:
	docker-compose down

logs:
	docker-compose logs --follow --tail=1000

bash:
	docker-compose run --rm ${SERVICE_NAME} bash

migrations:
	docker-compose run --rm ${SERVICE_NAME} python manage.py makemigrations

show-migrations:
	docker-compose run --rm ${SERVICE_NAME} python manage.py showmigrations

migrate:
	docker-compose run --rm ${SERVICE_NAME} python manage.py migrate

test:
	docker-compose run --rm ${SERVICE_NAME} python manage.py test customers
