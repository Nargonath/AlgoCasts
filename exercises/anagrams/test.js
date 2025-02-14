const anagrams = require("./index.js");

test("anagrams function exists", () => {
  expect(typeof anagrams).toEqual("function");
});

test('"hello" is an anagram of "llohe"', () => {
  expect(anagrams("hello", "llohe")).toBe(true);
});

test('"Whoa! Hi!" is an anagram of "Hi! Whoa!"', () => {
  expect(anagrams("Whoa! Hi!", "Hi! Whoa!")).toBe(true);
});

test('"One One" is not an anagram of "Two two two"', () => {
  expect(anagrams("One One", "Two two two")).toBe(false);
});

test('"One one" is not an anagram of "One one c"', () => {
  expect(anagrams("One one", "One one c")).toBe(false);
});

test('"A tree, a life, a bench" is not an anagram of "A tree, a fence, a yard"', () => {
  expect(anagrams("A tree, a life, a bench", "A tree, a fence, a yard")).toBe(
    false
  );
});
