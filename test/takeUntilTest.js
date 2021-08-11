const chai = require('chai');
const assert = chai.assert;
const takeUntil = require('../takeUntil');

describe('#takeUntil', function() {
  it('should return [1, 2, 5, 7, 2]', function() {
    const data = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const result = takeUntil(data, x => x < 0);
    assert.deepEqual(result, [1, 2, 5, 7, 2]);
  });
  it("should return ['I\'ve', 'been', 'to', 'Hollywood']", function() {
    const data = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const result = takeUntil(data, x => x === ',');
    assert.deepEqual(result, ['I\'ve', 'been', 'to', 'Hollywood']);
  });
});