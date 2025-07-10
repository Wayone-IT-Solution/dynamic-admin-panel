#!/bin/bash

# Output file name
OUTPUT_FILE="combined_js_code.txt"

# Find and process .js files
find . -type f -name "*.js" | while read -r file; do
    # Add file path header
    echo "// =========================================" >> "$OUTPUT_FILE"
    echo "// FILE: $file" >> "$OUTPUT_FILE"
    echo "// =========================================" >> "$OUTPUT_FILE"
    echo "" >> "$OUTPUT_FILE"

    # Append file content
    cat "$file" >> "$OUTPUT_FILE"

    # Add spacing between files
    echo "" >> "$OUTPUT_FILE"
    echo "" >> "$OUTPUT_FILE"
done

echo "All JavaScript files have been combined into $OUTPUT_FILE"
