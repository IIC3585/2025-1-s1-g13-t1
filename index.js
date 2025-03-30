const path = require('path');
const _ = require('lodash');
const { rowsToColumns, columnsToRows } = require('./csvTransforms');
const { read, write, insertRow, insertColumn, swapColumns, deleteRow, deleteColumn} = require('./utils');
const { toHTMLTable } = require('./toHtmlTable');

const filePath = path.join(__dirname, 'test.csv');
const outputFilePath = path.join(__dirname, 'test_output.csv');
const htmlTableFile = path.join(__dirname, 'test.html');
let csvData = read(filePath);

const rowToInsert = ['99','John','34','Las Vegas','Nevada'];
const columnToInsert = [
    "Software Engineer",
    "Data Scientist",
    "Graphic Designer",
    "Project Manager",
    "Product Designer",
    "HR Manager",
    "Marketing Specialist",
    "UX/UI Designer",
    "Content Writer",
    "Web Developer",
    "Architect"
  ]
  
csvData = _.chain(csvData)
  .thru(data => insertRow(data, 2, rowToInsert))
  .thru(data => insertColumn(data, 3, columnToInsert))
  .thru(data => swapColumns(data, 1, 3))
  .thru(data => deleteRow(data, 1))
  .thru(data => deleteColumn(data, 2))
  .thru(data => rowsToColumns(data))
  .value();

write(outputFilePath, csvData);
toHTMLTable(csvData, htmlTableFile);