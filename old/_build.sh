#!/usr/bin/env sh

function build() {
  composer install --no-dev --no-scripts
  npm install
  npm run build
}

build
