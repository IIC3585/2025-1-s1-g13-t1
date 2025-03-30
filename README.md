## Usage

1. Install Lodash:
   ```bash
   npm install lodash
   ```

1. Run chain of functions:
   ```bash
   node index.js
   ```
## Functions

This project contains functions to transform CSV files using a functional approach with ES6 and the Lodash library.

 `readCSVRows` is a generator function, which means instead of loading the whole `.csv` file into memory, it reads line by line.

- `rowsToColumns(csvString)`: Transposes the CSV by converting rows into columns.
  
- `columnsToRows(csvString)`: Re-transposes the CSV, converting columns back into rows.



