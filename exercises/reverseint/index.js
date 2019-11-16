// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const sign = Math.sign(n);
  const str = Math.abs(n).toString();

  if (str.length === 1) {
    return sign * Number(str);
  }

  const reversed = str
    .split("")
    .reverse()
    .join("");
  return sign * Number(reversed);
}

module.exports = reverseInt;
