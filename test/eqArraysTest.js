const chai = require('chai');
const assert = chai.assert;
const eqArrays = require('../eqArrays');

describe('#eqArrays', function() {
  it('should return true', function() {
    const result = eqArrays([1, 2, 3], [1, 2, 3]);
    assert.isTrue(result);
  });
  it('should return false', function() {
    const result = eqArrays([1, 2, 3], [3, 2, 1]);
    assert.isFalse(result);
  });
  it('should return true', function() {
    const result = eqArrays(['1', '2', '3'], ['1', '2', '3']);
    assert.isTrue(result);
  });
  it('should return false', function() {
    const result = eqArrays(['1', '2', '3'], ['1', '2', 3]);
    assert.isFalse(result);
  });
  it('should return true', function() {
    const result = eqArrays([[2, 3], [4]], [[2, 3], [4]]);
    assert.isTrue(result);
  });
  it('should return false', function() {
    const result = eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]);
    assert.isFalse(result);
  });
  it('should return false', function() {
    const result = eqArrays([[2, 3], [4]], [[2, 3], 4]);
    assert.isFalse(result);
  });
  it('should return true', function() {
    const result = eqArrays([[2, 3], {4: 'four'}], [[2, 3], {4: 'four'}]);
    assert.isTrue(result);
  });
  it('should return false', function() {
    const result = eqArrays([[2, 3], {4: 'four'}], [[2, 3], {4: 'four', 5: 'five'}]);
    assert.isFalse(result);
  });
});