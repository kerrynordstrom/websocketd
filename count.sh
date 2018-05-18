#!/bin/bash
for ((COUNT = 1; COUNT <= 5123; COUNT++)); do
  echo $(( RANDOM % 2 ))
  sleep .00000001s
done
