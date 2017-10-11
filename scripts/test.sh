#!/usr/bin/env bash

set -e

yarn lint
yarn flow
yarn test --ci
