// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  if (typeof stringA !== "string" || typeof stringB !== "string") {
    return false;
  }

  return cleanAndSortString(stringA) === cleanAndSortString(stringB);
}

function cleanAndSortString(string) {
  return string
    .replace(/[\W]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
}

module.exports = anagrams;

// first solution
/* function anagrams(stringA, stringB) {
  if (typeof stringA !== "string" || typeof stringB !== "string") {
    return false;
  }

  const str1 = stringA.replace(/[\W]/g, "").toLowerCase();
  const str2 = stringB.replace(/[\W]/g, "").toLowerCase();

  if (str1.length !== str2.length) {
    return false;
  }

  const mapA = new Map();
  const mapB = new Map();

  for (let i = 0; i < stringA.length; i++) {
    if (!mapA.has(stringA[i])) {
      mapA.set(stringA[i], 1);
    } else {
      mapA.set(stringA[i], mapA.get(stringA[i]) + 1);
    }

    if (!mapB.has(stringB[i])) {
      mapB.set(stringB[i], 1);
    } else {
      mapB.set(stringB[i], mapB.get(stringB[i]) + 1);
    }
  }

  if (mapA.size !== mapB.size) {
    return false;
  }

  for (let [char, count] of mapA) {
    if (!mapB.has(char)) {
      return false;
    } else if (mapB.get(char) !== count) {
      return false;
    }
  }

  return true;
} */
