const path = require('path');
const { read, write, insertRow, insertColumn, swapColumns } = require('./utils');

const filePath = path.join(__dirname, 'test.csv');
let csvData = read(filePath);
const rowToInsert = ["Martin", "Jara", "martinjf@uc.cl"];
const columnToInsert = ["1", "2", "3", "4"];

csvData = insertRow(csvData, 2, rowToInsert);
csvData = insertColumn(csvData, 3, columnToInsert);
csvData = swapColumns(csvData, 1, 3);

write(filePath, csvData);
