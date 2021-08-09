const eqObjects = require('./eqObjects');

const eqArrays = function(array1, array2) {

  if (array1.length !== array2.length) {
    return false;
  }
  if (array1.length === 0) {
    return true;
  }
  for (let i = 0; i < array1.length; i++) {
    const isArrOne = array1[i] instanceof Array;
    const isObjOne = array1[i] instanceof Object;
    const isArrTwo = array2[i] instanceof Array;
    const isObjTwo = array2[i] instanceof Object;

    // when both args are arrays
    if (isArrOne && isArrTwo) {
      if (!eqArrays(array1[i], array2[i])) {
        return false;
      }
    // when both args are objects
    } else if (!isArrOne && isObjOne && !isArrTwo && isObjTwo) {
      if (!eqObjects(array1[i], array2[i])) {
        return false;
      }
    // when 1 or both args are primitive types e.g. num, string, bool
    } else {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  }
  return true;
};

module.exports = eqArrays;