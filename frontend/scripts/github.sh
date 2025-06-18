#!/bin/bash

npm run build
cd dist
git add .
git commit -m "new"
git push origin build
cd ..