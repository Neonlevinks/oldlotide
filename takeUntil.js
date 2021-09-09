const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    console.log(callback(item));
    if (callback(item)) {
      break;
    } else {
      results.push(item);
    }
  }
 
  return results;
}

const eqArrays = (array1, array2) => array1.join() === array2.join() ? true : false; //ternary, if the string containing all the values in array1 matches the string containing all the values in array2, this function will return the boolean true

const assertArraysEqual = (actual, expected) => eqArrays(actual, expected) ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed, ${actual} !== ${expected}`);

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ])

module.exports = takeUntil;