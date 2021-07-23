const eqArrays = function(array1, array2) {

  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {

    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log('✅✅✅Assertion Passed: ', actual, ' === ', expected);
  } else {
    console.log('❌❌❌Assertion Failed: ', actual, ' !== ', expected);
  }
};

const middle = function(array) {
  let output = [];
  let length = array.length;
  if (length > 2 && length % 2 !== 0) {
    output.push(array[Math.floor(length / 2)]);
  } else if (length > 2 && length % 2 === 0) {
    output.push(array[(length / 2) - 1], array[length / 2]);
  }
  return output;
};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle(['Lighthouse', 'Labs']), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle(['Lighthouse', 'Labs', 'Bootcamp']), ['Labs']);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);