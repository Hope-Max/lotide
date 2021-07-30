const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {

  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    // The type of both targets are arrays
    if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
      if (!eqArrays(array1[i], array2[i])) {
        return false;
      }
    // The type of both targets are objects
    } else if (!(array1[i] instanceof Array) && (array1[i] instanceof Object) && !(array2[i] instanceof Array) && (array2[i] instanceof Object)) {
      if (!eqObjects(array1[i], array2[i])) {
        return false;
      }
    // The type of both targets are primitive data
    } else {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } 
  for (let key of Object.keys(object1)) {
    // The type of both targets are arrays
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    // The type of both targets are objects
    } else if (!(object1[key] instanceof Array) && (object1[key] instanceof Object) && !(object2[key] instanceof Array) && (object2[key] instanceof Object)) {
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
    // The type of both targets are primitive data
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true);
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', 3]), false);

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);

assertEqual(eqArrays([[2, 3], {4: 'four'}], [[2, 3], {4: 'four'}]), true);
assertEqual(eqArrays([[2, 3], {4: 'four'}], [[2, 3], {4: 'four', 5: 'five'}]), false);