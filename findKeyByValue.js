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

module.exports = findKeyByValue;