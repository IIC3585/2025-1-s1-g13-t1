const _ = require('lodash');

function rowsToColumns(csvData) {
  const transposed = _.zip(...csvData);
  return transposed
}

function columnsToRows(csvData) {
  return rowsToColumns(csvData);
}

module.exports = {
  rowsToColumns,
  columnsToRows
};
