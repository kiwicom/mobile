#!/usr/bin/env bash

yarn lint
yarn flow
yarn test --ci
