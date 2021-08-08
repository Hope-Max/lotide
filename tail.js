const tail = function(array) {
  if (array.length === 0) {
    return [];
  } else {
    return array.filter(number => array.indexOf(number) !== 0);
  }
};

module.exports = tail;