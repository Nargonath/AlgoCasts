// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const map = new Map();

  for (let char of str) {
    const count = map.has(char) ? map.get(char) + 1 : 1;
    map.set(char, count);
  }

  let maxEntry = null;
  for (let [char, count] of map) {
    if (!maxEntry) {
      maxEntry = [char, count];
    } else if (maxEntry[1] < count) {
      maxEntry = [char, count];
    }
  }

  return maxEntry[0];
}

module.exports = maxChar;
