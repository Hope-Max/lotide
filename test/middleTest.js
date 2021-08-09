const chai = require('chai');
const assert = chai.assert;
const middle = require('../middle');

describe('#middle', function() {
  it('should return [] when the input is [1]', function() {
    const input = [1];
    const result = middle(input);
    assert.deepEqual(result, []);
  });
  it('should return [3, 4] when the input is [1, 2, 3, 4, 5, 6]', function() {
    const input = [1, 2, 3, 4, 5, 6];
    const result = middle(input);
    assert.deepEqual(result, [3, 4]);
  });
  it('should return [] when the input is []', function() {
    const input = [];
    const result = middle(input);
    assert.deepEqual(result, []);
  });
  it('should return [] when the input is [1, 2]', function() {
    const input = [1, 2];
    const result = middle(input);
    assert.deepEqual(result, []);
  });
  it("should return [] when the input is ['Lighthouse', 'Labs']", function() {
    const input = ['Lighthouse', 'Labs'];
    const result = middle(input);
    assert.deepEqual(result, []);
  });
  it('should return [2] when the input is [1, 2, 3]', function() {
    const input = [1, 2, 3];
    const result = middle(input);
    assert.deepEqual(result, [2]);
  });
  it("should return ['Labs'] when the input is ['Lighthouse', 'Labs', 'Bootcamp']", function() {
    const input = ['Lighthouse', 'Labs', 'Bootcamp'];
    const result = middle(input);
    assert.deepEqual(result, ['Labs']);
  });
  it('should return [3] when the input is [1, 2, 3, 4, 5]', function() {
    const input = [1, 2, 3, 4, 5];
    const result = middle(input);
    assert.deepEqual(result, [3]);
  });
  it('should return [[2], [3, 4]] when the input is [1, [2], [3, 4], 5]', function() {
    const input = [1, [2], [3, 4], 5];
    const result = middle(input);
    assert.deepEqual(result, [[2], [3, 4]]);
  });
  it('should return [7] when the input is [1, 2, 8, 7, 4, 2, 10]', function() {
    const input = [1, 2, 8, 7, 4, 2, 10];
    const result = middle(input);
    assert.deepEqual(result, [7]);
  });
});