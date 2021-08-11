const flatten = function(array) {
  let results = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      results = results.concat(flatten(array[i]));
    } else {
      results.push(array[i]);
    }
  }
  return results;
};

// const flatten = function(array) {
//   let results = [];
//   for (let i = 0; i < array.length; i++) {
//     if (Array.isArray(array[i])) {
//       for (let item of array[i]) {
//         results.push(item);
//       }
//     } else {
//       results.push(array[i]);
//     }
//   }
//   return results;
// };

module.exports = flatten;

