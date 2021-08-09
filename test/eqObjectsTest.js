const chai = require('chai');
const assert = chai.assert;
const eqObjects = require('../eqObjects');

describe('#eqObjects', function() {
  it('should return true', function() {
    const ab = {a: '1', b: '2'};
    const ba = {b: '2', a: '1'};
    const result = eqObjects(ab, ba);
    assert.isTrue(result);
  });
  it('should return false', function() {
    const ab = {a: '1', b: '2'};
    const abc = {a: '1', b: '2', c: '3'};
    const result = eqObjects(ab, abc);
    assert.isFalse(result);
  });
  it('should return true', function() {
    const cd = { c: "1", d: ["2", 3]};
    const dc = { d: ["2", 3], c: "1"};
    const result = eqObjects(cd, dc);
    assert.isTrue(result);
  });
  it('should return false', function() {
    const cd = { c: "1", d: ["2", 3]};
    const cd2 = { c: ["1"], d: ["2", 3]};
    const result = eqObjects(cd, cd2);
    assert.isFalse(result);
  });
  it('should return true', function() {
    const ef = {e: ["1", 'max'], f: ["2", 3, 'hannah'], g: 1};
    const fe = {f: ["2", 3, 'hannah'], e: ["1", 'max'], g: 1};
    const result = eqObjects(ef, fe);
    assert.isTrue(result);
  });
  it('should return true', function() {
    const gh = {g: {1: 'max'}, h: {2: 'hannah', 3: 'Ray'}};
    const hg = {h: {2: 'hannah', 3: 'Ray'}, g: {1: 'max'}};
    const result = eqObjects(gh, hg);
    assert.isTrue(result);
  });
  it('should return false', function() {
    const ij = {i: {1: 'max'}, j: {2: 'hannah', 3: 'Ray'}};
    const ji = {j: {2: 'hannah', 3: 'Ray'}, i: ['max']};
    const result = eqObjects(ij, ji);
    assert.isFalse(result);
  });
  it('should return true', function() {
    const result = eqObjects({a: { z: 1 }, b: 2}, {a: { z: 1 }, b: 2});
    assert.isTrue(result);
  });
  it('should return true', function() {
    const result = eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 });
    assert.isTrue(result);
  });
  it('should return false', function() {
    const result = eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 });
    assert.isFalse(result);
  });
  it('should return false', function() {
    const result = eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 });
    assert.isFalse(result);
  });
  it('should return true', function() {
    const result = eqObjects({ a: { x: {y: 0, z: 1 }, w: {v: 3, u: 4}}, b: 2}, { a: { x: {y: 0, z: 1 }, w: {v: 3, u: 4}}, b: 2});
    assert.isTrue(result);
  });
});