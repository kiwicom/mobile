#!/usr/bin/env bash

for (( i=0; i<${SCRIPT_INPUT_FILE_COUNT}; i++)) do
  tmp_entry="SCRIPT_INPUT_FILE_$i"
  ENTRY_FILE=${!tmp_entry}
  rm -rf "$ENTRY_FILE"
done