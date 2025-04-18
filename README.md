## Basic information
This project is a simple CSV file manipulator that allows you to perform various operations on CSV files, such as inserting and deleting rows and columns, swapping columns, transposing data, and converting data to HTML tables. It is built using TypeScript in Vite.

The app is deployed on GitHub Pages and can be accessed at [https://iic3585.github.io/2025-1-s1-g13-t1/](https://iic3585.github.io/2025-1-s1-g13-t1/).

## Usage

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Deploy the project:
   ```bash
   npm run build

   npm run deploy
   ```

## Functions in `src/main.ts`

This project contains functions to transform CSV files using a functional approach with ES6 and the Lodash library.

### 1. `insertRow(csvData, index, rowToInsert)`

Inserta una nueva fila en una posición específica dentro de la matriz de datos CSV que se le entrega

**Parameters:**

- `csvData` (Array\<Array>): Matriz de datos donde se insertará la fila.
- `index` (number): Posición en la que se insertará la fila.
- `rowToInsert` (Array): Fila que se añadirá a la matriz.

**Return:**

- `Array<Array<string>>`: Nueva matriz con la fila insertada.



### 2. `insertColumn(csvData, index, columnToInsert)`

Inserta una nueva columna en una posición específica dentro de la matriz de datos CSV.

**Parameters:**

- `csvData` (Array\<Array>): Matriz de datos donde se insertará la columna.
- `index` (number): Posición en la que se insertará la columna.
- `columnToInsert` (Array): Columna que se añadirá a la matriz.

**Return:**

- `Array<Array<string>>`: Nueva matriz con la columna insertada.



### 3. `swapColumns(csvData, index1, index2)`

Intercambia dos columnas dentro de la matriz de datos CSV.

**Parameters:**

- `csvData` (Array\<Array>): Matriz de datos donde se intercambiarán las columnas.
- `index1` (number): Índice de la primera columna a intercambiar.
- `index2` (number): Índice de la segunda columna a intercambiar.

**Return:**

- `Array<Array<string>>`: Nueva matriz con las columnas intercambiadas.

### 4. `rowsToColumns(csvData)`

Transposes a `.csv` file by converting rows into columns.

**Parameters:**

- `csvData` (Array\<Array>): Data matrix.

**Return:**

- `Array<Array<string>>`: Transposed matrix.


### 5. `columnsToRows(csvData)`

Re-transposes a `.csv` file by converting columns back into rows. 

**Parameters:**

- `csvData` (Array\<Array>): Data matrix.

**Return:**

- `Array<Array<string>>`: Transposed matrix.


### 5. `toHTMLTable(csvData)`

Receives a 2×2 matrix, generates an HTML table, and writes it to a `.html` file with pretty-printed syntax.

**Parameters:**

- `csvData` (Array\<Array>): Data matrix.

**Return:**

- `string`: HTML table in string format 


### 6. `deleteRow(csvData, index)`

Deletes a row of a 2x2 given it's index by transforming a `.csv` file into a 2x2 array. 

**Parameters:**

- `csvData` (Array\<Array>): Data matrix.
- `index` (number): index of the row to be deleted.


**Return:**

- `Array<Array<string>>`: New matrix without the deleted row.



### 7. `deleteColumn(csvData, index)`

Deletes a row of a 2x2 given it's index by transforming a `.csv` file into a 2x2 array. 

**Parameters:**

- `csvData` (Array\<Array>): Data matrix.
- `index` (number): index of the column to be deleted.


**Return:**

- `Array<Array<string>>`: New matrix without the deleted column.


## Authors
- Martín Jara
- Benjamín Pedraza
- Benjamín Díaz