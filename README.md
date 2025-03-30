## Usage

1. Install Lodash:
   ```bash
   npm install lodash

## Functions

This project contains functions to transform CSV files using a functional approach with Lodash.

#### `readCsv.js`
 `readCSVRows` is a generator function, which means instead of loading the whole `.csv` file into memory, it reads line by line.

- **rowstocolumns(csvString):** Transposes the CSV by converting rows into columns.
- **coumnstorows(csvString):** Re-transposes the CSV, converting columns back into rows.

#### `toHTMLtable.js`
 execute: `node ./functions/toHTMLtable.js filename.csv`# CSV Transformations



