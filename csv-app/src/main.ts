import _ from "lodash";

const insertRow = (csvData: string[][], index: number, rowToInsert: string[]) => [
    ...csvData.slice(0, index),
    rowToInsert,
    ...csvData.slice(index)
];

const insertColumn = (csvData: string[][], index: number, columnToInsert: string[]) => 
    csvData.map((row, i) => [
        ...row.slice(0, index),
        columnToInsert[i] || "",
        ...row.slice(index)
    ]);

const swapColumns = (csvData: string[][], index1: number, index2: number) =>
    csvData.map(row => {
        if (row.length > Math.max(index1, index2)) {
            [row[index1], row[index2]] = [row[index2], row[index1]];
        }
        return row;
    });

const deleteRow = (csvData: string[][], index: number) => csvData.filter((_, i) => i !== index);

const deleteColumn = (csvData: string[][], index: number) => csvData.map(row => row.filter((_, i) => i !== index));

const rowsToColumns = (csvData: string[][]) => _.zip(...csvData);

const columnsToRows = (csvData: string[][]) => _.unzip(csvData);

const createRow = _.flow(
  (row: string[]) => _.map(row, (dataField) => `\t\t<td>${dataField}</td>`),
  (dataFields: string[]) => `\t<tr>\n${_.join(dataFields, '\n')}\n\t</tr>`
);

const createTable = (csvData: string[][]): string => {
  const rows = _.map(csvData, createRow).join('\n');
  return `<table>\n${rows}\n</table>`;
};

let csvData: string[][] = [];

document.getElementById("processCSV")?.addEventListener("click", () => {
    const fileInput = document.getElementById("csvFile") as HTMLInputElement;
    if (!fileInput.files || fileInput.files.length === 0) {
        alert("Recuerda cargar un archivo CSV");
        return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
        csvData = (event.target?.result as string)
            .split("\n")
            .map(row => row.split(","));
        renderTable();
    };

    reader.readAsText(file);
});

function renderTable() {
    const table = document.getElementById("csvTable") as HTMLDivElement;
    if (table) {
        table.innerHTML = createTable(csvData);
    }
}

document.getElementById("swapColumns")?.addEventListener("click", () => {
  const index1 = parseInt((document.getElementById("index1") as HTMLInputElement).value);
  const index2 = parseInt((document.getElementById("index2") as HTMLInputElement).value);

  if (isNaN(index1) || isNaN(index2)) {
      alert("índices inválidos");
      return;
  }

  if (index1 === index2) {
      alert("Deben ser columnas diferentes");
      return;
  }

  const numColumns = csvData[0]?.length;
  if (index1 >= numColumns || index2 >= numColumns) {
      alert("índices fuera de rango");
      return;
  }

  csvData = swapColumns(csvData, index1, index2);
  renderTable();
});

document.getElementById("rowsToColumns")?.addEventListener("click", () => {
    csvData = rowsToColumns(csvData) as string[][];
    renderTable();
});

document.getElementById("columnsToRows")?.addEventListener("click", () => {
    csvData = columnsToRows(csvData) as string[][];
    renderTable();
});

document.getElementById("deleteRow")?.addEventListener("click", () => {
  const rowIndex = parseInt((document.getElementById("rowIndex") as HTMLInputElement).value);

  if (isNaN(rowIndex)) {
      alert("índice inválido");
      return;
  }

  if (rowIndex < 0 || rowIndex >= csvData.length) {
      alert("índice fuera de rango");
      return;
  }

  csvData = deleteRow(csvData, rowIndex);
  renderTable();
});

document.getElementById("deleteColumn")?.addEventListener("click", () => {
  const columnIndex = parseInt((document.getElementById("columnIndex") as HTMLInputElement).value);

  if (isNaN(columnIndex)) {
      alert("índice inválido");
      return;
  }

  const numColumns = csvData[0]?.length;
  if (columnIndex < 0 || columnIndex >= numColumns) {
    alert("índice fuera de rango");
    return;
  }

  csvData = deleteColumn(csvData, columnIndex);
  renderTable();
});

document.getElementById("insertRow")?.addEventListener("click", () => {
  const rowInput = (document.getElementById("rowInput") as HTMLInputElement).value;
  const insertIndex = parseInt((document.getElementById("insertIndex") as HTMLInputElement).value);

  const newRow = rowInput.split(",").map(value => value.trim());

  if (newRow.length !== csvData[0]?.length) {
    alert("Cantidad de elementos incorrecta");
    return;
  }

  if (isNaN(insertIndex) || insertIndex < 0 || insertIndex > csvData.length) {
    alert("índice fuera de rango");
    return;
  }

  csvData = insertRow(csvData, insertIndex, newRow); 
  renderTable();
});

document.getElementById("insertColumn")?.addEventListener("click", () => {
  const columnInput = (document.getElementById("columnInput") as HTMLInputElement).value;
  const insertIndex = parseInt((document.getElementById("insertIndex") as HTMLInputElement).value);

  const newColumn = columnInput.split(",").map(value => value.trim());

  if (newColumn.length !== csvData.length) {
    alert("Cantidad de elementos incorrecta");
    return;
  }

  if (isNaN(insertIndex) || insertIndex < 0 || insertIndex > csvData[0]?.length) {
    alert("índice fuera de rango");
    return;
  }

  csvData = insertColumn(csvData, insertIndex, newColumn);
  renderTable();
});

document.getElementById("toggleHtml")?.addEventListener("click", () => {
  const htmlOutput = document.getElementById("htmlOutput") as HTMLElement;
  const button = document.getElementById("toggleHtml");

  if (htmlOutput.style.display === "none") {
      htmlOutput.style.display = "block";
      htmlOutput.textContent = createTable(csvData);
      if (button) {
          button.textContent = "Ocultar HTML";
      }
  } else {
      htmlOutput.style.display = "none";
      if (button) {
          button.textContent = "Mostrar HTML";
      }
  }
});
