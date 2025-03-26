const { readCSVRows } = require('./readCsv.js');

const filePath = process.argv[2];

async function processCSV(filePath) {
  for await (const row of readCSVRows(filePath)) {
    console.log(row);
  }
}

processCSV(filePath);