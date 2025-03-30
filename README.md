## Usage

1. Install Lodash:
   ```bash
   npm install lodash
   ```

1. Run chain of functions:
   ```bash
   node index.js
   ```
## Functions

This project contains functions to transform CSV files using a functional approach with ES6 and the Lodash library.

 `readCSVRows` is a generator function, which means instead of loading the whole `.csv` file into memory, it reads line by line.

- `rowsToColumns(csvString)`: Transposes the CSV by converting rows into columns.
  
- `columnsToRows(csvString)`: Re-transposes the CSV, converting columns back into rows.



### 1. `insertRow(csvData, index, rowToInsert)`

Inserta una nueva fila en una posición específica dentro de la matriz de datos CSV que se le entrega

**Parámetros:**

- `csvData` (Array\<Array>): Matriz de datos donde se insertará la fila.
- `index` (number): Posición en la que se insertará la fila.
- `rowToInsert` (Array): Fila que se añadirá a la matriz.

**Retorno:**

- `Array<Array<string>>`: Nueva matriz con la fila insertada.



### 2. `insertColumn(csvData, index, columnToInsert)`

Inserta una nueva columna en una posición específica dentro de la matriz de datos CSV.

**Parámetros:**

- `csvData` (Array\<Array>): Matriz de datos donde se insertará la columna.
- `index` (number): Posición en la que se insertará la columna.
- `columnToInsert` (Array): Columna que se añadirá a la matriz.

**Retorno:**

- `Array<Array<string>>`: Nueva matriz con la columna insertada.



### 3. `swapColumns(csvData, index1, index2)`

Intercambia dos columnas dentro de la matriz de datos CSV.

**Parámetros:**

- `csvData` (Array\<Array>): Matriz de datos donde se intercambiarán las columnas.
- `index1` (number): Índice de la primera columna a intercambiar.
- `index2` (number): Índice de la segunda columna a intercambiar.

**Retorno:**

- `Array<Array<string>>`: Nueva matriz con las columnas intercambiadas.
