// const eqArrays = require('./eqArrays');

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

const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  if (Object.keys(object1).length === 0) {
    return true;
  }

  for (let key of Object.keys(object1)) {
    const isArrOne = object1[key] instanceof Array;
    const isObjOne = object1[key] instanceof Object;
    const isArrTwo = object2[key] instanceof Array;
    const isObjTwo = object2[key] instanceof Object;

    // when both args are arrays
    if (isArrOne && isArrTwo) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    // when both args are objects
    } else if (!isArrOne && isObjOne && !isArrTwo && isObjTwo) {
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
    // when 1 or both args are primitive types e.g. num, string, bool
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

const cd = { c: "1", d: ["2", 3]};
const dc = { d: ["2", 3], c: "1"};
console.log(eqObjects(cd, dc));

module.exports = eqObjects;