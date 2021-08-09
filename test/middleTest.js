const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle(['Lighthouse', 'Labs']), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle(['Lighthouse', 'Labs', 'Bootcamp']), ['Labs']);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 8, 7, 4, 2, 10]), [7]);