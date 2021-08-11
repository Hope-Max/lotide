const without = function(source, itemsToRemove) {
  return source.filter(item => itemsToRemove.includes(item) !== true);
};

module.exports = without;