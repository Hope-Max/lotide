const chai = require('chai');
const assert = chai.assert;
const head = require('../head');

describe('#head', function() {
  it('should return 5 when the input is [5, 6, 7]', function() {
    const input = [5, 6, 7];
    const result = head(input);
    assert.strictEqual(result, 5);
  });
  it("should return Hello when the input is ['Hello', 'Lighthouse', 'Labs']", function() {
    const input = ['Hello', 'Lighthouse', 'Labs'];
    const result = head(input);
    assert.strictEqual(result, 'Hello');
  });
  it('should return undefined when the input is []', function() {
    const input = [];
    const result = head(input);
    assert.isUndefined(result);
  });
  it("should return Bootcamp when the input is ['Bootcamp']", function() {
    const input = ['Bootcamp'];
    const result = head(input);
    assert.strictEqual(result, 'Bootcamp');
  });
});