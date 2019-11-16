// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split("").reduce((acc, char) => `${char}${acc}`, "");
}

module.exports = reverse;

// first solution
// function reverse(str) {
//   let reversed = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str.charAt(i);
//   }

//   return reversed;
// }

// second solution
// function reverse(str) {
//   return Array.from(str)
//     .reverse()
//     .join("");
// }
