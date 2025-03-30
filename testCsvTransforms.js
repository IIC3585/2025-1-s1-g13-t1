const fs = require('fs');
const { rowstocolumns, coumnstorows } = require('./csvTransforms');

const csvString = fs.readFileSync('test.csv', 'utf8');

console.log("Original CSV:");
console.log(csvString);

console.log("\nRowstocolumns:");
const transposedCSV = rowstocolumns(csvString);
console.log(transposedCSV);

console.log("\nCoumnstorows:");
const originalCSV = coumnstorows(transposedCSV);
console.log(originalCSV);
