const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let key of Object.keys(object1)) {
      // The value of both keys are arrays
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        return eqArrays(object1[key], object2[key]);
        // The value of both keys are objects
      } else if (!(object1[key] instanceof Array) && (object1[key] instanceof Object) && !(object2[key] instanceof Array) && (object2[key] instanceof Object)) {
        return eqObjects(object1[key], object2[key]);
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const ab = {a: '1', b: '2'};
const ba = {b: '2', a: '1'};
const abc = {a: '1', b: '2', c: '3'};
assertObjectsEqual(ab, ba);
assertObjectsEqual(ab, abc);

const cd = { c: "1", d: ["2", 3]};
const dc = { d: ["2", 3], c: "1"};
const cd2 = { c: ["1"], d: ["2", 3]};
const ef = {e: ["1", 'max'], f: ["2", 3, 'hannah']};
const fe = {f: ["2", 3, 'hannah'], e: ["1", 'Max']};
assertObjectsEqual(cd, dc);
assertObjectsEqual(cd, cd2);
assertObjectsEqual(ef, fe);

const gh = {g: {1: 'max'}, h: {2: 'hannah', 3: 'Ray'}};
const hg = {h: {2: 'hannah', 3: 'Ray'}, g: {1: 'max'}};
const ij = {i: {1: 'max'}, j: {2: 'hannah', 3: 'Ray'}};
const ji = {j: {2: 'hannah', 3: 'Ray'}, i: ['max']};

assertObjectsEqual(gh, hg);
assertObjectsEqual(ij, ji);