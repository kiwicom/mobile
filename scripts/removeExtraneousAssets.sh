#!/usr/bin/env bash

# This is script is used after the iOS framework is built
# It removes files coming from Pods that we do not need (like a bunch of fonts from RNNVectorIcons
for (( i=0; i<${SCRIPT_INPUT_FILE_COUNT}; i++)) do
  tmp_entry="SCRIPT_INPUT_FILE_$i"
  ENTRY_FILE=${!tmp_entry}
  rm -rf "$ENTRY_FILE"
done