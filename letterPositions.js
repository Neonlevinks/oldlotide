const eqArrays = (resultArray, testArray) => resultArray.join() === testArray.join() ? true : false; //ternary, if the string containing all the values in array1 matches the string containing all the values in array2, this function will return the boolean true

const assertArraysEqual = (resultArray, testArray) => eqArrays(resultArray, testArray) ? console.log(`✅✅✅ Assertion Passed, ${resultArray} === ${testArray}  `) : console.log(`🛑🛑🛑 Assertion Failed ${resultArray} !== ${testArray} `);


const letterPositions = function(sentence) {
  const results = {};
  for (const index in sentence) {
    let letter = sentence[index];
    let indexInt = parseInt(index);
    results[letter] ? results[letter].push(indexInt) : results[letter] = [indexInt];
  }
  return results;
};

console.log(letterPositions("hello"));

assertArraysEqual(letterPositions("hello").e, [1])

module.exports = letterPositions;