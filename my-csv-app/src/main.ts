document.getElementById("processCSV")?.addEventListener("click", () => {
  const fileInput = document.getElementById("csvFile") as HTMLInputElement;
  if (!fileInput.files || fileInput.files.length === 0) {
      alert("Selecciona un archivo CSV primero.");
      return;
  }

  const file = fileInput.files[0];
  const reader = new FileReader();
  
  reader.onload = (event) => {
      const csvData = event.target?.result as string;
      const rows = csvData.split("\n").map(row => row.split(","));
      renderTable(rows);
  };

  reader.readAsText(file);
});

function renderTable(data: string[][]) {
  const table = document.getElementById("csvTable") as HTMLTableElement;
  table.innerHTML = "";
  data.forEach(row => {
      const tr = document.createElement("tr");
      row.forEach(cell => {
          const td = document.createElement("td");
          td.textContent = cell;
          tr.appendChild(td);
      });
      table.appendChild(tr);
  });
}

