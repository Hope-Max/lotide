const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(head([5, 6, 7]), 5);
assertEqual(head([5, 6, 7]), 7);
assertEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
assertEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Max');
assertEqual(head([]), 'Hello');
assertEqual(head(['Bootcamp']), 'Bootcamp');