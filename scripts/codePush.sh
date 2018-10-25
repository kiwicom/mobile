#!/bin/bash

# Choose for which app you would like to send codepush changes
chooseAppToUpdate() {
  read -p "➤ Which app would you like to update? (mobile-ios/mobile-android) : " app_name
  case "$app_name" in
    mobile-ios|MOBILE-IOS)
      return 0
      ;;
    mobile-android|MOBILE-ANDROID)
      return 0
      ;;
    *)
      printf %s\\n "Please enter app name properly"
      return 1
      ;;
  esac
}

until chooseAppToUpdate; do : ; done

# Optionally you can add description for code push changes
configureCodePushDescription() {
  read -p "➤ Do you want to specify code push description? (y/n) : " description_answer
  case "$description_answer" in
    y|Y)
      read -p "Type a description: " description
      ;;
    n|N)
      return 0
      ;;
    *)
      printf %s\\n "Please enter 'y/Y' or 'n/N'"
      return 1
      ;;
  esac
}

until configureCodePushDescription; do : ; done

# Generating final code push command
configureCodePushRelease() {
  args=""

  if [[ $app_name =~ ^(mobile-ios|MOBILE-IOS)$ || $app_name =~ ^(mobile-android|MOBILE-ANDROID)$ ]] ;then
    args="$args -a Kiwicom/$app_name"
  fi

  if [[ $description_answer =~ ^(y|Y)$ ]] ;then
    args="$args --description $description"
  fi

  if [[ $version_answer =~ ^(y|Y)$ ]]; then
    args="$args -t $version"
  fi

  echo -n "Starting code push ..."
  # exec appcenter codepush release-react $args --entry-file ./app/native.js -d Staging 
  echo appcenter codepush release-react $args --entry-file ./app/native.js -d Staging 

}

# Optionally you can add target binary version
configureCodePushVersion() {
  read -p "➤ Do you want to specify code push version? (y/n) : " version_answer
  case "$version_answer" in
    y|Y)
      read -p "Type a version: " version
      configureCodePushRelease
      ;;
    n|N)
      configureCodePushRelease
      ;;
    *)
      printf %s\\n "Please enter 'y/Y' or 'n/N'"
      return 1
      ;;
  esac
}

until configureCodePushVersion; do : ; done
