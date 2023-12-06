
default: build

build:
	npm run build

deploy:
	netlify deploy --prod -d dist

freshdeploy: build deploy

readme:
	readmix --compile --markdown README.md.rx

clean:
	@rm -rf dist
