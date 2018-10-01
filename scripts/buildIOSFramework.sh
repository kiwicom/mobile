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
PATH_ASSETS=$PATH_UNIVERSAL/$FRAMEWORK/assets/fonts

# Install Javascript dependencies
yarn

# Enter iOS folder
cd ios

# Clear build
rm -rf build

# Install native dependencies
pod install

# Needed to avoid https://github.com/facebook/react-native/issues/11710
sed -i -e 's/RCTLogError/\/\/RCTLogError/g' ../node_modules/react-native/React/Modules/RCTStatusBarManager.m

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

# Revert node_modules changes
sed -i -e 's/\/\/RCTLogError/RCTLogError/g' ../node_modules/react-native/React/Modules/RCTStatusBarManager.m

# Create assets folder within framework
mkdir $PATH_ASSETS

# Copy ios fonts from RN to framework
shopt -s extglob
cp -R ../assets/fonts/!(android) $PATH_ASSETS

# Move level up ios fonts 
mv $PATH_ASSETS/ios/* $PATH_ASSETS
rm -rf $PATH_ASSETS/ios

# Move other fonts from framework to assets/fonts directory 
find $PATH_UNIVERSAL/$FRAMEWORK/ -name "*.otf" -maxdepth 1 -exec mv {} $PATH_ASSETS \;
find $PATH_UNIVERSAL/$FRAMEWORK/ -name "*.ttf" -maxdepth 1 -exec mv {} $PATH_ASSETS \;

# Print the output file
echo "ios/$PATH_UNIVERSAL/$FRAMEWORK"
