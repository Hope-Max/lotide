const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  return array.filter(number => array.indexOf(number) !== 0);
};

let array1 = ["Hello", "Lighthouse", "Labs"];
console.log(tail(array1));
console.log(array1);

assertEqual(tail(array1).length, 2);
assertEqual(tail(array1)[0], 'Lighthouse');
assertEqual(tail(array1)[1], 'Labs');


let array2 = [1, 2, 3, 4, 5];
console.log(tail(array2));
console.log(array2);
assertEqual(tail(array2).length, 2);
assertEqual(tail(array2)[0], 2);
assertEqual(tail(array2)[2], 4);

let array3 = ['Max'];
console.log(tail(array3));
console.log(array3);
assertEqual(tail(array3).length, 0);
assertEqual(tail(array3)[0], undefined);
assertEqual(tail(array3)[1], 0);

let array4 = [];
console.log(tail(array4));
console.log(array4);
assertEqual(tail(array3).length, 0);
assertEqual(tail(array3)[0], undefined);
assertEqual(tail(array3)[0], 0);