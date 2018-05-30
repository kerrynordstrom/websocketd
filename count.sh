#!/bin/bash

for ((COUNT = 1; COUNT <= 500; COUNT++)); do
  echo $(( RANDOM % 2 ))
  sleep .001s
done
