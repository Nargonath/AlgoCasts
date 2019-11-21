// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const lesser = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = lesser;
      }
    }
  }

  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[indexOfMin] > arr[j]) {
        indexOfMin = j;
      }
    }

    if (indexOfMin !== i) {
      const higher = arr[i];
      arr[i] = arr[indexOfMin];
      arr[indexOfMin] = higher;
    }
  }

  return arr;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const firstHalf = arr.splice(0, Math.floor(arr.length / 2));
  return merge(mergeSort(firstHalf), mergeSort(arr));
}

function merge(left, right) {
  const result = [];
  while (left.length && right.length) {
    result.push(left[0] < right[0] ? left.shift() : right.shift());
  }

  const remaining = left.length ? left : right;
  result.push(...remaining);

  return result;
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
