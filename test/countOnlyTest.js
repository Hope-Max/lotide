const chai = require('chai');
const assert = chai.assert;
const countOnly = require('../countOnly');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const namesToCount = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false, "Salima": true};

describe('#countOnly', function() {
  it('should return 1', function() {
    const result = countOnly(firstNames, namesToCount);
    assert.strictEqual(result['Jason'], 1);
  });
  it('should return undefined', function() {
    const result = countOnly(firstNames, namesToCount);
    assert.isUndefined(result['Karima']);
  });
  it('should return 2', function() {
    const result = countOnly(firstNames, namesToCount);
    assert.strictEqual(result['Fang'], 2);
  });
  it('should return undefined', function() {
    const result = countOnly(firstNames, namesToCount);
    assert.isUndefined(result['Agouhanna']);
  });
  it('should return 2', function() {
    const result = countOnly(firstNames, namesToCount);
    assert.strictEqual(result['Salima'], 2);
  });
});
