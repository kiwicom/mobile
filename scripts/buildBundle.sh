#!/usr/bin/env bash

# see: https://www.gnu.org/software/bash/manual/html_node/The-Set-Builtin.html
set -e # exit immediately if a pipeline returns a non-zero status
set -x # print a trace of simple commands

mkdir -pv ./.build/android
mkdir -pv ./.build/ios

basicCommand="yarn react-native bundle --dev=false --verbose"

$basicCommand \
    --platform=ios \
    --entry-file=./app/hotels/index.js \
    --bundle-output=./.build/ios/hotels.ios.jsbundle \
    --assets-dest ./.build/ios/

$basicCommand \
    --platform=android \
    --entry-file=./app/hotels/index.js \
    --bundle-output=./.build/android/hotels.android.jsbundle \
    --assets-dest ./.build/android/
