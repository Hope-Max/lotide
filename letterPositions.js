const letterPositions = function(sentence) {
  let output = {};
  for (let i = 0; i < sentence.length; i++) {
    if (output[sentence[i]]) {
      output[sentence[i]].push(i);
    } else {
      output[sentence[i]] = [i];
    }
  }
  return output;
};

module.exports = letterPositions;