// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const results = [];
  let count = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  for (let i = 0; i < n; i++) {
    // not needed because you can write into an array at a position i
    // even if it was not initialized like below however the solution
    // below is more readible
    results.push(Array(n));
  }

  while (startColumn <= endColumn && startRow <= endRow) {
    for (let currentCol = startColumn; currentCol <= endColumn; currentCol++) {
      results[startRow][currentCol] = count;
      count++;
    }
    startRow++;

    for (let currentRow = startRow; currentRow <= endRow; currentRow++) {
      results[currentRow][endColumn] = count;
      count++;
    }
    endColumn--;

    for (let currentCol = endColumn; currentCol >= startColumn; currentCol--) {
      results[endRow][currentCol] = count;
      count++;
    }
    endRow--;

    for (let currentRow = endRow; currentRow >= startRow; currentRow--) {
      results[currentRow][startColumn] = count;
      count++;
    }
    startColumn++;
  }

  return results;
}

module.exports = matrix;
