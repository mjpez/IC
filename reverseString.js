/*
Write a function that takes an array of characters and reverses the letters in-place.
*/

function reverseString(strArr) {
  let leftIndex = 0;
  let rightIndex = strArr.length - 1;

  while (leftIndex < rightIndex) {
    [strArr[leftIndex], strArr[rightIndex]] = [strArr[rightIndex], strArr[leftIndex]];
    leftIndex++;
    rightIndex--;
  }

  return strArr;
}

// Tests

let desc = 'short array';
let actual = reverseString([1, 2, 3]);
let expected = [3, 2, 1];
assertArrayEquals(actual, expected, desc);

desc = 'longer array',
  actual = reverseString([8, 2, 4, 3, 1, 5]);
expected = [5, 1, 3, 4, 2, 8];
assertArrayEquals(actual, expected, desc);

function assertArrayEquals(a, b, desc) {
  const arrayA = JSON.stringify(a);
  const arrayB = JSON.stringify(b);
  if (arrayA !== arrayB) {
    console.log(`${desc} ... FAIL: ${arrayA} != ${arrayB}`)
  } else {
    console.log(`${desc} ... PASS`);
  }
}
