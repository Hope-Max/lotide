const countOnly = function(allItems, itemsToCount) {
  let results = {};

  for (let item of allItems) {
    if (itemsToCount[item] === true) {
      if (results[item]) {
        results[item]++;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;