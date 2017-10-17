#!/usr/bin/env bash

yarn exp -- login -u $EXP_USERNAME -p $EXP_PASSWORD
yarn exp -- publish --non-interactive
