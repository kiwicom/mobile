#!/usr/bin/env bash

# see: https://www.gnu.org/software/bash/manual/html_node/The-Set-Builtin.html
set -e # exit immediately if a pipeline returns a non-zero status
set -x # print a trace of simple commands

rm -rf ./.build/android
mkdir -pv ./.build/android
mkdir -pv ./.build/android/assets
mkdir -pv ./.build/android/assets/fonts
mkdir -pv ./.build/android/res

basicCommand="yarn react-native bundle --dev=false --verbose"

$basicCommand \
    --platform=android \
    --entry-file=./app/native.js \
    --bundle-output=./.build/android/assets/index.android.bundle \
    --assets-dest ./.build/android/res

mkdir -pv ./.build/android/assets/fonts
# Copy shared fonts
cp ./assets/fonts/*.ttf ./.build/android/assets/fonts
# Copy Android only fonts
cp ./assets/fonts/android/* ./.build/android/assets/fonts