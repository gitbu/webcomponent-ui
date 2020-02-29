#!/bin/bash

npm run build:docs

cd dist

git init
git add .
git commit -m "deploy"
git push -f https://github.com/gitbu/webcomponent-ui.git master:gh-pages

cd -
