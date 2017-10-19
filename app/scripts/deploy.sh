#!/usr/bin/env bash

# see: https://www.gnu.org/software/bash/manual/html_node/The-Set-Builtin.html
set -e # exit immediately if a pipeline returns a non-zero status
set -x # print a trace of simple commands

yarn exp -- login -u $EXP_USERNAME -p $EXP_PASSWORD
yarn exp -- publish --non-interactive
