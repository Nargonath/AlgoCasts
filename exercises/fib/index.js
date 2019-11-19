// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn) {
  const memo = new Map();

  return function(...args) {
    // when using the map we need to stringify the array if we want the memoize
    // function to be the most generic possible. Map uses the === operator to
    // compare the keys hence calling it with a new array every time won't work.
    // Notes that using JSON.stringify could have impact on performance as JSON.stringify could be O(n).
    // We could use an object literal and doing obj[args] which basically does args.toString()
    // implicitely. The problem is that it flattens nested arrays and any object will be [Object object]
    // hence we would have entries that collides.
    // Another solution which is the one that lodash uses is to allow the user to pass a second
    // argument to the memoize function that is a function whose job is to create the cache key.
    // That way the user knows better which data to use that would be unique otherwise just use
    // the first element of args.
    const key = JSON.stringify(args);
    if (memo.has(key)) {
      return memo.get(key);
    }

    const result = fn.apply(this, args);
    memo.set(key, result);
    return result;
  };
}

function fib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

fib = memoize(fib);
module.exports = fib;

// iterative solution
/* function fib(n) {
  const results = [0, 1];

  for (let i = 2; i <= n; i++) {
    results[i] = results[i - 1] + results[i - 2];
  }

  return results[n];
}
 */

// recursive solution
/* function fib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}
 */
