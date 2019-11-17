// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(depth, currentRow = 0, pyramidLevel = "") {
  if (depth === currentRow) {
    return;
  }

  const totalChars = 2 * depth - 1;
  if (pyramidLevel.length === totalChars) {
    console.log(pyramidLevel);
    pyramid(depth, currentRow + 1);
    return;
  }

  const currentCol = pyramidLevel.length;
  const pyramidMidPoint = Math.floor(totalChars / 2);
  let charToAdd = "";

  if (
    pyramidMidPoint - currentRow <= currentCol &&
    pyramidMidPoint + currentRow >= currentCol
  ) {
    charToAdd += "#";
  } else {
    charToAdd += " ";
  }

  pyramid(depth, currentRow, pyramidLevel + charToAdd);
}

module.exports = pyramid;

// first solution
/* function pyramid(depth) {
  // 2n+1
  // n = 0, => 1
  // n = 1, => 3
  // n = 2, => 5
  // n = 3, => 7

  const totalChar = 2 * depth - 1;
  const pyramidMiddle = Math.floor(totalChar / 2);
  for (let row = 0; row < depth; row++) {
    let rowString = "";

    for (let col = 0; col < totalChar; col++) {
      if (pyramidMiddle - row <= col && pyramidMiddle + row >= col) {
        rowString += '#';
      } else {
        rowString += ' ';
      }
    }

    console.log(rowString);
  }
} */
