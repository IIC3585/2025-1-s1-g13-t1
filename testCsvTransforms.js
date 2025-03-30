const fs = require('fs');
const { rowsToColumns, columnsToRows } = require('./csvTransforms');

const csvString = fs.readFileSync('test.csv', 'utf8');

console.log("Original CSV:");
console.log(csvString);

console.log("\nRows to Columns:");
const transposedCSV = rowsToColumns(csvString);
console.log(transposedCSV);

console.log("\nColumns To Rows:");
const originalCSV = columnsToRows(transposedCSV);
console.log(originalCSV);
