run_local:
	npm run local:start

run_dev:
	npm run dev:start

run_prod:
	npm run prod:start


compose_dev_up:
	docker-compose -f docker-compose.dev.yml up -d --build

compose_dev_down:
	docker-compose -f docker-compose.dev.yml down
