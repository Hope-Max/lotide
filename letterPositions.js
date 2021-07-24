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

const letterPositions = function(sentence) {
  let output = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (output[sentence[i]]) {
        output[sentence[i]].push(i);
      } else {
        output[sentence[i]] = [i];
      }
    }
  }
  return output;
};

assertArraysEqual(letterPositions('lighthouse in the house')['l'], [0]);
assertArraysEqual(letterPositions('lighthouse in the house')['i'], [1, 11]);
assertArraysEqual(letterPositions('lighthouse in the house')['g'], [2]);
assertArraysEqual(letterPositions('lighthouse in the house')['h'], [3, 5, 15, 18]);
assertArraysEqual(letterPositions('lighthouse in the house')['t'], [4, 14]);
assertArraysEqual(letterPositions('lighthouse in the house')['o'], [6, 19]);
assertArraysEqual(letterPositions('lighthouse in the house')['u'], [7, 20]);
assertArraysEqual(letterPositions('lighthouse in the house')['s'], [8, 21]);
assertArraysEqual(letterPositions('lighthouse in the house')['e'], [9, 16, 22]);
assertArraysEqual(letterPositions('lighthouse in the house')['n'], [12]);

assertArraysEqual(letterPositions('hello')['h'], [0]);
assertArraysEqual(letterPositions('hello')['e'], [1]);
assertArraysEqual(letterPositions('hello')['l'], [2, 3]);
assertArraysEqual(letterPositions('hello')['o'], [4]);