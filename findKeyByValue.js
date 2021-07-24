const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};
/*
const findKeyByValue = function(target, value) {
  for (let key in target) {
    if (Object.prototype.hasOwnProperty.call(target, key) && target[key] === value) {
      return key;
    }
  }
};
*/
const findKeyByValue = function(target, value) {
  for (let key of Object.keys(target)) {
    if (target[key] === value) {
      return key;
    }
  }
};
const bestTVShowsByGenre = {
  sci_fi: 'The Expanse',
  comedy: 'Brooklyn Nine-Nine',
  drama: 'The Wire'
};

assertEqual(findKeyByValue(bestTVShowsByGenre, 'The Expanse'), 'sci_fi');
assertEqual(findKeyByValue(bestTVShowsByGenre, 'Brooklyn Nine-Nine'), 'comedy');
assertEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');