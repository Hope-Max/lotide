const chai = require('chai');
const assert = chai.assert;
const without = require('../without');

describe('#without', function() {
  it('should return [2, 3]', function() {
    const source = [1, 2, 3];
    const result = without(source, [1]);
    assert.deepEqual(result, [2, 3]);
  });
  it("should return ['1', '2']", function() {
    const source = ['1', '2', '3'];
    const result = without(source, [1, 2, '3']);
    assert.deepEqual(result, ['1', '2']);
  });
  it("should return ['hello', 'world']", function() {
    const source = ['hello', 'world', 'lighthouse'];
    const result = without(source, ['lighthouse']);
    assert.deepEqual(result, ['hello', 'world']);
  });
});