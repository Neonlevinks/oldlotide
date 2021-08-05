const eqArrays = (resultArray, solutionArray) => resultArray.join() === solutionArray.join() ? true : false; //ternary, if the string containing all the values in array1 matches the string containing all the values in array2, this function will return the boolean true

const assertArraysEqual = (resultArray, solutionArray) => eqArrays(resultArray, solutionArray) ? console.log("✅✅✅ Assertion Passed, both arrays are equal") : console.log("🛑🛑🛑 Assertion Failed, the arrays are not equal");

const middle = (inputArray) => {
  let resultArray = [];
  const midpointIndex = inputArray.length / 2;
  if (inputArray.length <= 2) {
    resultArray = [];
  } else if ((inputArray.length > 2) && (inputArray.length % 2 === 0)) {
    // push 2 middle numbers to resultArray
    resultArray.push(Math.floor(inputArray[midpointIndex - 1]));
    resultArray.push(Math.floor(inputArray[midpointIndex]));
  } else if ((inputArray.length > 2) && (inputArray.length % 2 !== 0)) {
    // push middle number to resultArray
    resultArray.push((inputArray[(Math.floor(midpointIndex))]));
  }
  return resultArray;
};

assertArraysEqual((middle([1, 2])), []);
assertArraysEqual((middle([1, 2, 3])), [2]);
assertArraysEqual((middle([1, 2, 3, 4, 5])), [3]);
assertArraysEqual((middle([1, 2, 3, 4])), [2, 3]);
assertArraysEqual((middle([1, 2, 3, 4, 5, 6])), [3, 4]);