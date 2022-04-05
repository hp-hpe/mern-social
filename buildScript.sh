#!/bin/sh
npm set registry https://registry.npmjs.org/
rm -rf node_modules && rm ./package-lock.json && npm install
npm install
npm run build
