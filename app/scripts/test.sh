#!/usr/bin/env bash

# see: https://www.gnu.org/software/bash/manual/html_node/The-Set-Builtin.html
set -e # exit immediately if a pipeline returns a non-zero status
set -x # print a trace of simple commands

yarn lint
yarn flow app
node node_modules/jest/bin/jest.js --ci --color --config=.jest.json
yarn relay -- --validate
