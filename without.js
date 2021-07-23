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

const without = function(source, itemsToRemove) {
  return source.filter(item => itemsToRemove.includes(item) !== true);
};

let word1 = [1, 2, 3];
console.log(without(word1, [1]));
assertArraysEqual(word1, [1, 2, 3]);

let word2 = ['1', '2', '3'];
console.log(without(word2, [1, 2, '3']));
assertArraysEqual(word2, ['1', '2', '3']);

let word3 = ['hello', 'world', 'lighthouse'];
console.log(without(word3, ['lighthouse']));
assertArraysEqual(word3, ['hello', 'world', 'lighthouse']);