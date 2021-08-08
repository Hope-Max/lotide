const assertEqual = require('../assertEqual');
const tail = require('../tail');


const array1 = ["Hello", "Lighthouse", "Labs"];
console.log(tail(array1));
console.log(array1);
assertEqual(tail(array1).length, 2);
assertEqual(tail(array1)[0], 'Lighthouse');
assertEqual(tail(array1)[1], 'Labs');


const array2 = [1, 2, 3, 4, 5];
console.log(tail(array2));
console.log(array2);
assertEqual(tail(array2).length, 4);
assertEqual(tail(array2)[0], 2);
assertEqual(tail(array2)[1], 3);
assertEqual(tail(array2)[2], 4);
assertEqual(tail(array2)[3], 5);

const array3 = ['Max'];
console.log(tail(array3));
console.log(array3);
assertEqual(tail(array3).length, 0);
assertEqual(tail(array3)[0], undefined);

const array4 = [];
console.log(tail(array4));
console.log(array4);
assertEqual(tail(array4).length, 0);
assertEqual(tail(array4)[0], undefined);