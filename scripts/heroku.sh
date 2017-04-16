#!/usr/bin/env bash

npm run build
git add .
read -p "Commit to Heroku description: " desc
git commit -m "$desc"
git push heroku master
heroku open