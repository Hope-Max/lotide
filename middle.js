const middle = function(array) {
  let output = [];
  let length = array.length;
  if (length > 2 && length % 2 !== 0) {
    output.push(array[Math.floor(length / 2)]);
  } else if (length > 2 && length % 2 === 0) {
    output.push(array[(length / 2) - 1], array[length / 2]);
  }
  return output;
};

module.exports = middle;