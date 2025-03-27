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

module.exports = {
    read,
    write,
    insertRow,
    insertColumn,
    swapColumns
};
