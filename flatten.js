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

const flatten = function(array) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) === true) {
      for (let item of array[i]) {
        output.push(item);
      }
    } else {
      output.push(array[i]);
    }
  }
  return output;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, [3, 4], 5, [6]]);
assertArraysEqual(flatten(['Lighthouse', 'Labs', ['Max', 'Hannah', 'Tom', 'Ray'], 'Bootcamp', ['Niagara Falls', 'GTA']]), ['Lighthouse', 'Labs', ['Max', 'Hannah', 'Tom', 'Ray'], 'Bootcamp', ['Niagara Falls', 'GTA']]);