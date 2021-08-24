const assertArraysEqual = require("./assertArraysEqual")

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

module.exports = middle;