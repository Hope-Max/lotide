const chai = require('chai');
const assert = chai.assert;
const letterPositions = require('../letterPositions');

const str1 = 'lighthouse in the house';
const str2 = 'hello';

describe('#letterPositions', function() {
  it('should return [0]', function() {
    const result = letterPositions(str1);
    assert.deepEqual(result['l'], [0]);
  });
  it('should return [1, 11]', function() {
    const result = letterPositions(str1);
    assert.deepEqual(result['i'], [1, 11]);
  });
  it('should return [2]', function() {
    const result = letterPositions(str1);
    assert.deepEqual(result['g'], [2]);
  });
  it('should return [3, 5, 15, 18]', function() {
    const result = letterPositions(str1);
    assert.deepEqual(result['h'], [3, 5, 15, 18]);
  });
  it('should return [4, 14]', function() {
    const result = letterPositions(str1);
    assert.deepEqual(result['t'], [4, 14]);
  });
  it('should return [6, 19]', function() {
    const result = letterPositions(str1);
    assert.deepEqual(result['o'], [6, 19]);
  });
  it('should return [7, 20]', function() {
    const result = letterPositions(str1);
    assert.deepEqual(result['u'], [7, 20]);
  });
  it('should return [8, 21]', function() {
    const result = letterPositions(str1);
    assert.deepEqual(result['s'], [8, 21]);
  });
  it('should return [9, 16, 22]', function() {
    const result = letterPositions(str1);
    assert.deepEqual(result['e'], [9, 16, 22]);
  });
  it('should return [12]', function() {
    const result = letterPositions(str1);
    assert.deepEqual(result['n'], [12]);
  });
  it('should return [10, 13, 17]', function() {
    const result = letterPositions(str1);
    assert.deepEqual(result[' '], [10, 13, 17]);
  });
  it('should return [0]', function() {
    const result = letterPositions(str2);
    assert.deepEqual(result['h'], [0]);
  });
  it('should return [1]', function() {
    const result = letterPositions(str2);
    assert.deepEqual(result['e'], [1]);
  });
  it('should return [2, 3]', function() {
    const result = letterPositions(str2);
    assert.deepEqual(result['l'], [2, 3]);
  });
  it('should return [4]', function() {
    const result = letterPositions(str2);
    assert.deepEqual(result['o'], [4]);
  });
});