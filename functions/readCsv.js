const fs = require("fs");

const filePath = process.argv[2];

if (!filePath) {
    console.error("Usage: node readCsv.js <filename.csv>");
    process.exit(1);
}

fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log(data);
});
