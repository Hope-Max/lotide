const chai = require('chai');
const assert = chai.assert;
const flatten = require('../flatten');

describe('#flatten', function() {
  it('should return [1, 2, 3, 4, 5, 6]', function() {
    const input = [1, 2, [3, 4], 5, [6]];
    const result = flatten(input);
    assert.deepEqual(result, [1, 2, 3, 4, 5, 6]);
  });
  it('should return [1, 2, 3, 4, 7, 5, 6]', function() {
    const input = [1, 2, [[3, 4], 7], 5, [6]];
    const result = flatten(input);
    assert.deepEqual(result, [1, 2, 3, 4, 7, 5, 6]);
  });
  it('should return [1, 2, 3, 4, 8, 9, 7, 5, 6]', function() {
    const input = [1, 2, [[3, 4, [8, 9]], 7], 5, [6]];
    const result = flatten(input);
    assert.deepEqual(result, [1, 2, 3, 4, 8, 9, 7, 5, 6]);
  });
  it("should return ['Lighthouse', 'Labs', 'Max', 'Hannah', 'Tom', 'Ray']", function() {
    const input = ['Lighthouse', 'Labs', ['Max', 'Hannah', 'Tom', 'Ray']];
    const result = flatten(input);
    assert.deepEqual(result, ['Lighthouse', 'Labs', 'Max', 'Hannah', 'Tom', 'Ray']);
  });
});
