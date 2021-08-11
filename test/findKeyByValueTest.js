const chai = require('chai');
const assert = chai.assert;
const findKeyByValue = require('../findKeyByValue');

const bestTVShowsByGenre = {
  sci_fi: 'The Expanse',
  comedy: 'Brooklyn Nine-Nine',
  drama: 'The Wire'
};

describe('#findKeyByValue', function() {
  it("should return 'sci_fi'", function() {
    const result = findKeyByValue(bestTVShowsByGenre, 'The Expanse');
    assert.strictEqual(result, 'sci_fi');
  });
  it("should return 'comedy'", function() {
    const result = findKeyByValue(bestTVShowsByGenre, 'Brooklyn Nine-Nine');
    assert.strictEqual(result, 'comedy');
  });
  it("should return 'drama'", function() {
    const result = findKeyByValue(bestTVShowsByGenre, 'The Wire');
    assert.strictEqual(result, 'drama');
  });
});