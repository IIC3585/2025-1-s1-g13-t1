const fs = require('fs');
const readline = require('readline');

async function* readCSVRows(filePath, separator = ',') {
  const fileStream = fs.createReadStream(filePath);
  const rl = readline.createInterface({ input: fileStream });

  for await (const line of rl) {
    yield line.split(separator).map(cell => cell.trim());
  }
}

module.exports = { readCSVRows };