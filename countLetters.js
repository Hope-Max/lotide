const countLetters = function(sentence) {
  let output = {};
  let sentenceWithoutSpace = sentence.split(' ').join('');
  for (let character of sentenceWithoutSpace) {
    if (output[character]) {
      output[character]++;
    } else {
      output[character] = 1;
    }
  }
  return output;
};

module.exports = countLetters;