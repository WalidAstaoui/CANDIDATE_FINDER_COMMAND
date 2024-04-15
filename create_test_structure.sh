#!/bin/bash

# Directory containing source files
src_dir="src"

# Directory where test files will be created
test_dir="tests"

# Create the test directory if it doesn't exist
mkdir -p $test_dir

# Find all TypeScript files in src directory, then create corresponding directories and test files in tests directory
find $src_dir -name '*.js' | while read src_file; do
  # Replace 'src' with 'tests' and append '.test' before the file extension
  test_file="${src_file/$src_dir/$test_dir}"
  test_file="${test_file%.ts}.test.js"
  
  # Create directory if it does not exist
  mkdir -p "$(dirname "$test_file")"
  
  # Create an empty test file if it does not exist
  if [ ! -f "$test_file" ]; then
    touch "$test_file"
    echo "Created test file: $test_file"
  fi
done
