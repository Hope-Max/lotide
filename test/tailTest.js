const chai = require('chai');
const assert = chai.assert;
const tail = require('../tail');

describe('#tail', function() {
  it("should return ['Lighthouse', 'Labs'] when the input is ['Hello', 'Lighthouse', 'Labs']", function() {
    const input = ['Hello', 'Lighthouse', 'Labs'];
    const result = tail(input);
    assert.deepEqual(result, ['Lighthouse', 'Labs']);
  });
  it('should return [2, 3, 4, 5] when the input is [1, 2, 3, 4, 5]', function() {
    const input = [1, 2, 3, 4, 5];
    const result = tail(input);
    assert.deepEqual(result, [2, 3, 4, 5]);
  });
  it("should return [] when the input is ['Max']", function() {
    const input = ['Max'];
    const result = tail(input);
    assert.deepEqual(result, []);
  });
  it("should return [] when the input is []", function() {
    const input = [];
    const result = tail(input);
    assert.deepEqual(result, []);
  });
});