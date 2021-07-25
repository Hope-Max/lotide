const map = function(array, callback) {
  let results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

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
  const inspect = require('util').inspect;
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

const nums = [1, 3, 5, 7, 9];
const results2 = map(nums, num => num * num);
assertArraysEqual(results2, [1, 9, 25, 49, 81]);

const arrs = [['max', 'boy'], ['hannah', 'girl'], ['ray', 'boy']];
const results3 = map(arrs, arr => arr[0] + ' is a ' + arr[1]);
assertArraysEqual(results3, ['max is a boy', 'hannah is a girl', 'ray is a boy']);