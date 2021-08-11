const chai = require('chai');
const assert = chai.assert;
const map = require('../map');

describe('#map', function() {
  it("should return ['g', 'c', 't', 'm', 't']", function() {
    const words = ['ground', 'control', 'to', 'major', 'tom'];
    const result = map(words, word => word[0]);
    assert.deepEqual(result, ['g', 'c', 't', 'm', 't']);
  });
  it('should return [1, 9, 25, 49, 81]', function() {
    const nums = [1, 3, 5, 7, 9];
    const result = map(nums, num => num * num);
    assert.deepEqual(result, [1, 9, 25, 49, 81]);
  });
  it("should return ['max is a boy', 'hannah is a girl', 'ray is a boy']", function() {
    const arrs = [['max', 'boy'], ['hannah', 'girl'], ['ray', 'boy']];
    const result = map(arrs, arr => arr[0] + ' is a ' + arr[1]);
    assert.deepEqual(result, ['max is a boy', 'hannah is a girl', 'ray is a boy']);
  });
});