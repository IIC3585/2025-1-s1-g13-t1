const _ = require('lodash');
const fs = require('fs');

const createRow = _.flow(
    (row) => _.map(row, (dataField) => `\t\t<td>${dataField}</td>`),
    (dataFields) => `\t<tr>\n${_.join(dataFields, '\n')}\n\t</tr>`
)

const createTable = (csvData) => {
    const rows = _.map(csvData, createRow).join('\n');
    return `<table>\n${rows}\n</table>`;
}

const writeHTMLFile = (filePath, htmlCode) => fs.writeFileSync(filePath, htmlCode);

const toHTMLTable = (csvData, filePath) => writeHTMLFile(filePath, createTable(csvData));

module.exports = {
    toHTMLTable
};