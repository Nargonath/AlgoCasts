// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(depth, currentRow = 0, stair = "") {
  if (depth === currentRow) {
    return;
  }

  if (stair.length === depth) {
    console.log(stair);
    steps(depth, currentRow + 1);
    return;
  }

  const nextChar = stair.length <= currentRow ? "#" : " ";
  steps(depth, currentRow, stair + nextChar);
}

module.exports = steps;

// first solution
/* function steps(n) {
  let steps = "";
  for (let i = 0; i < n; i++) {
    steps += "#";
    console.log(steps.padEnd(n, " "));
  }
}
 */

// second solution
/* function steps(n) {
  let stairs = "";
  for (let i = 0; i < n; i++) {
    stairs += "#";
    console.log(
      stairs +
        Array(n - i - 1)
          .fill(" ")
          .join("")
    );
  }
} */
