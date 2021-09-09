const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word.length) //test 1 to show length of each word
const results3 = map(words, word => `${word} David Bowie`)// test 2 to show David Bowie after each word
console.log(results1);
const results4 = map(words, word => `${word} starts with ${word[0]}`)// shows what each word starts with

const eqArrays = (array1, array2) => array1.join() === array2.join() ? true : false; //ternary, if the string containing all the values in array1 matches the string containing all the values in array2, this function will return the boolean true

const assertArraysEqual = (actual, expected) => eqArrays(actual, expected) ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed, ${actual} !== ${expected}`);

assertArraysEqual(results2, [6, 7, 2, 5, 3]) 
assertArraysEqual(results3, ["ground David Bowie","control David Bowie","to David Bowie","major David Bowie","tom David Bowie"])
assertArraysEqual(results4, ["ground starts with g,control starts with c,to starts with t,major starts with m,tom starts with t"])

module.exports = map;