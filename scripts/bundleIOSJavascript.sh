#!/bin/bash

# This file is executed by XCode when building RNKiwiMobile framework.
# It runs `react-native bundle` command on every input file set
# and stores Javascript and its assets in output directory

# This part is taken from `react-native-run-xcode.sh`
case "$CONFIGURATION" in
  *Debug*)
    DEV=true
    ;;
  "")
    echo "$0 must be invoked by Xcode"
    exit 1
    ;;
  *)
    DEV=false
    ;;
esac

# Define NVM_DIR and source the nvm.sh setup script
[ -z "$NVM_DIR" ] && export NVM_DIR="$HOME/.nvm"

if [[ -s "$HOME/.nvm/nvm.sh" ]]; then
  . "$HOME/.nvm/nvm.sh"
elif [[ -x "$(command -v brew)" && -s "$(brew --prefix nvm)/nvm.sh" ]]; then
  . "$(brew --prefix nvm)/nvm.sh"
fi

# Set up the nodenv node version manager if present
if [[ -x "$HOME/.nodenv/bin/nodenv" ]]; then
  eval "$("$HOME/.nodenv/bin/nodenv" init -)"
fi

[ -z "$NODE_BINARY" ] && export NODE_BINARY="node"
[ -z "$CLI_PATH" ] && export CLI_PATH="$SRCROOT/../node_modules/react-native/local-cli/cli.js"
[ -z "$BUNDLE_COMMAND" ] && BUNDLE_COMMAND="bundle"

if [[ -z "$BUNDLE_CONFIG" ]]; then
  CONFIG_ARG=""
else
  CONFIG_ARG="--config $(pwd)/$BUNDLE_CONFIG"
fi

nodejs_not_found()
{
  echo "error: Can't find '$NODE_BINARY' binary to build React Native bundle" >&2
  echo "If you have non-standard nodejs installation, select your project in Xcode," >&2
  echo "find 'Build Phases' - 'Bundle React Native code and images'" >&2
  echo "and change NODE_BINARY to absolute path to your node executable" >&2
  echo "(you can find it by invoking 'which node' in the terminal)" >&2
  exit 2
}

type $NODE_BINARY >/dev/null 2>&1 || nodejs_not_found

# Print commands before executing them (useful for troubleshooting)
set -x

# Javascript modules to bundle within the framework are set dynamically
# inside `Run Script` phase as a `Input files` and `Output files`.
#
# XCode creates SCRIPT_INPUT_FILE_X for every file where X is the order
# the files are defined. Below we loop over them all and execute 
# `react-native bundle` command.
for (( i=0; i<${SCRIPT_INPUT_FILE_COUNT}; i++)) do
    tmp_entry="SCRIPT_INPUT_FILE_$i"
    tmp_dest="SCRIPT_OUTPUT_FILE_$i"
    ENTRY_FILE=${!tmp_entry}
    BUNDLE_OUTPUT=${!tmp_dest}
    ASSETS_DEST=$(dirname $BUNDLE_OUTPUT)

    $NODE_BINARY "$CLI_PATH" $BUNDLE_COMMAND \
      $CONFIG_ARG \
      --entry-file "$ENTRY_FILE" \
      --platform ios \
      --dev $DEV \
      --reset-cache \
      --bundle-output "$BUNDLE_OUTPUT" \
      --assets-dest "$ASSETS_DEST"
done
