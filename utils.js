const fs = require('fs');
const path = require('path');

const read = (filePath) => {
    const data = fs.readFileSync(filePath, 'utf8');
    return data.split('\n').map(row => row.split(','));
}

const write = (filePath, data) => {
    const rows = data.map(row => row.join(',')).join('\n');
    fs.writeFileSync(filePath, rows);
}

const insertRow = (csvData, index, rowToInsert) => {
    return [
        ...csvData.slice(0, index),
        rowToInsert,
        ...csvData.slice(index)
    ];
}

const insertColumn = (csvData, index, columnToInsert) => {
    return csvData.map((row, i) => [
        ...row.slice(0, index),
        columnToInsert[i],
        ...row.slice(index)
    ]);
}

const swapColumns = (csvData, index1, index2) => {
    return csvData.map(row => {
        const temp = row[index1];
        row[index1] = row[index2];
        row[index2] = temp;
        return row;
    });
}

const deleteRow = (csvData, index) => {
    return csvData.filter((_, i) => i !== index);
};

const deleteColumn = (csvData, index) => {
    return csvData.map(row => row.filter((_, i) => i !== index));
}

const toHTMLTable = (csvData, filePath) => {
    const table = csvData.map(row => `\t<tr>${row.map(dataField => `\n\t\t<td>${dataField}</td>`).join('')}\n\t</tr>\n`).join('');
    const htmlTable = `<table>\n${table}\n</table>`
    fs.writeFileSync(filePath, htmlTable);
    return
}

module.exports = {
    read,
    write,
    insertRow,
    insertColumn,
    swapColumns,
    deleteRow,
    deleteColumn,
    toHTMLTable
};
