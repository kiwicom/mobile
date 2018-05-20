#!/usr/bin/env bash

# see: https://www.gnu.org/software/bash/manual/html_node/The-Set-Builtin.html
set -e # exit immediately if a pipeline returns a non-zero status
set -x # print a trace of simple commands

# Name of the project (as in `.xcodeproj`)
PROJECT=reactNativeApp

TARGET=RNKiwiMobile
FRAMEWORK=RNKiwiMobile.framework

PATH_IPHONE=build/iphoneos
PATH_SIMULATOR=build/iphonesimulator
PATH_UNIVERSAL=build/universal

# Install Javascript dependencies
yarn

# Enter iOS folder
cd ios

# Install native dependencies
pod install

# Create iPhone framework
xcodebuild -workspace $PROJECT.xcworkspace -sdk iphoneos -scheme $TARGET -configuration Release -derivedDataPath $PATH_IPHONE clean build -quiet

# Create iOS Simulator framework
xcodebuild -workspace $PROJECT.xcworkspace -sdk iphonesimulator -scheme $TARGET -configuration Release -derivedDataPath $PATH_SIMULATOR clean build -quiet

# Create FAT framework
mkdir $PATH_UNIVERSAL 
cp $PATH_IPHONE/Build/Products/Release-iphoneos/$FRAMEWORK/$TARGET $PATH_UNIVERSAL/iphoneos 
cp $PATH_SIMULATOR/Build/Products/Release-iphonesimulator/$FRAMEWORK/$TARGET $PATH_UNIVERSAL/iphonesimulator
lipo -create $PATH_UNIVERSAL/iphoneos $PATH_UNIVERSAL/iphonesimulator -output $PATH_UNIVERSAL/$TARGET
rm $PATH_UNIVERSAL/iphoneos
rm $PATH_UNIVERSAL/iphonesimulator
cp -R build/iphoneos/Build/Products/Release-iphoneos/$FRAMEWORK $PATH_UNIVERSAL/$FRAMEWORK
mv $PATH_UNIVERSAL/$TARGET $PATH_UNIVERSAL/$FRAMEWORK/$TARGET

# Extract FAT framework to the current folder"
cp -R $PATH_UNIVERSAL/$FRAMEWORK

# Open .framework folder
open $PATH_UNIVERSAL