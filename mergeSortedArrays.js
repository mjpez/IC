/*
We have our lists of orders sorted numerically already, in arrays. Write a function to merge our arrays of orders into one sorted array.
*/

function mergeSortedArrays(arrOne, arrTwo) {
  let mergedArr = [];
  let arrOneIndex = 0;
  let arrTwoIndex = 0;

  while (arrOneIndex < arrOne.length - 1 || arrTwoIndex < arrTwo.length - 1) {
    if (arrOne[arrOneIndex] < arrTwo[arrTwoIndex]) {
      mergedArr.push(arrOne[arrOneIndex]);
      arrOneIndex++;
    } else {
      mergedArr.push(arrTwo[arrTwoIndex]);
      arrTwoIndex++;
    }
  }
  return mergedArr.concat(arrOne.slice(arrOneIndex)).concat(arrTwo.slice(arrTwoIndex));
}

// Tests

let desc = 'short array';
let actual = mergeSortedArrays([3, 4, 6, 10, 11, 15], [1, 5, 8, 12, 14, 19]);
let expected = [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19];
assertArrayEquals(actual, expected, desc);

// desc = 'longer array',
// actual = mergeSortedArrays([8, 2, 4, 3, 1, 5]);
// expected = [5, 1, 3, 4, 2, 8];
// assertArrayEquals(actual, expected, desc);

function assertArrayEquals(a, b, desc) {
  const arrayA = JSON.stringify(a);
  const arrayB = JSON.stringify(b);
  if (arrayA !== arrayB) {
    console.log(`${desc} ... FAIL: ${arrayA} != ${arrayB}`)
  } else {
    console.log(`${desc} ... PASS`);
  }
}
