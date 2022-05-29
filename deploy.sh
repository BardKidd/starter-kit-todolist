#!/usr/bin/env sh

set -e

npm run build:pro

cd dist

git init
git add .
git commit -m "deploy"

git push -f https://github.com/BardKidd/starter-kit-todolist.git master:gh-pages

cd -