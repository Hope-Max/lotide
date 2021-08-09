const assertEqual = require('../assertEqual');
const eqObjects = require('../eqObjects');

const ab = {a: '1', b: '2'};
const ba = {b: '2', a: '1'};
const abc = {a: '1', b: '2', c: '3'};
assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3]};
const dc = { d: ["2", 3], c: "1"};
const cd2 = { c: ["1"], d: ["2", 3]};
const ef = {e: ["1", 'max'], f: ["2", 3, 'hannah'], g: 1};
const fe = {f: ["2", 3, 'hannah'], e: ["1", 'max'], g: 1};
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);
assertEqual(eqObjects(ef, fe), true);

const gh = {g: {1: 'max'}, h: {2: 'hannah', 3: 'Ray'}};
const hg = {h: {2: 'hannah', 3: 'Ray'}, g: {1: 'max'}};
const ij = {i: {1: 'max'}, j: {2: 'hannah', 3: 'Ray'}};
const ji = {j: {2: 'hannah', 3: 'Ray'}, i: ['max']};

assertEqual(eqObjects(gh, hg), true);
assertEqual(eqObjects(ij, ji), false);

assertEqual(eqObjects({a: { z: 1 }, b: 2}, {a: { z: 1 }, b: 2}), true);

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
assertEqual(eqObjects({ a: { x: {y: 0, z: 1 }, w: {v: 3, u: 4}}, b: 2}, { a: { x: {y: 0, z: 1 }, w: {v: 3, u: 4}}, b: 2}), true);