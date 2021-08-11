const chai = require('chai');
const assert = chai.assert;
const countLetters = require('../countLetters');
const sentence = 'lighthouse in the house';

describe('#countLetters', function() {
  it('should return 1', function() {
    const result = countLetters(sentence);
    assert.strictEqual(result['l'], 1);
  });
  it('should return 2', function() {
    const result = countLetters(sentence);
    assert.strictEqual(result['i'], 2);
  });
  it('should return 1', function() {
    const result = countLetters(sentence);
    assert.strictEqual(result['g'], 1);
  });
  it('should return 4', function() {
    const result = countLetters(sentence);
    assert.strictEqual(result['h'], 4);
  });
  it('should return 2', function() {
    const result = countLetters(sentence);
    assert.strictEqual(result['t'], 2);
  });
  it('should return 2', function() {
    const result = countLetters(sentence);
    assert.strictEqual(result['o'], 2);
  });
  it('should return 2', function() {
    const result = countLetters(sentence);
    assert.strictEqual(result['u'], 2);
  });
  it('should return 2', function() {
    const result = countLetters(sentence);
    assert.strictEqual(result['s'], 2);
  });
  it('should return 3', function() {
    const result = countLetters(sentence);
    assert.strictEqual(result['e'], 3);
  });
  it('should return 1', function() {
    const result = countLetters(sentence);
    assert.strictEqual(result['n'], 1);
  });
});