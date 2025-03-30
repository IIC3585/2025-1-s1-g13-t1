const _ = require('lodash');

function parseCSV(csvString) {
  return csvString.split('\n').map(row => row.split('\t').map(cell => cell.trim()));
}

function arrayToCSV(matrix) {
  return matrix.map(row => row.join('\t')).join('\n');
}

function rowstocolumns(csvString) {
  const rows = parseCSV(csvString);
  const transposed = _.zip(...rows);
  return arrayToCSV(transposed);
}

function coumnstorows(csvString) {
  return rowstocolumns(csvString);
}

module.exports = {
  rowstocolumns,
  coumnstorows
};
