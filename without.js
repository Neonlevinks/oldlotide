const eqArrays = (resultArray, testArray) => resultArray.join() === testArray.join() ? true : false; //ternary, if the string containing all the values in array1 matches the string containing all the values in array2, this function will return the boolean true

const assertArraysEqual = (resultArray, testArray) => eqArrays(resultArray, testArray) ? console.log("✅✅✅ Assertion Passed, both arrays are equal") : console.log("🛑🛑🛑 Assertion Failed, the arrays are not equal");

const without = (originArray, removalArray) => {
  let resultArray = [];
  for (let i = 0; i < originArray.length; i++) {
    let findMatch = false;
    for (let j = 0; j < removalArray.length; j++) {
      if (removalArray[j] === originArray[i]) {
        findMatch = true;
      }
      
    }
    if (!findMatch) {
      resultArray.push(originArray[i]);
    }
  }
  return resultArray;
};

assertArraysEqual((without([1, 2, 3], [1])), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]),["1", "2"]);

module.exports = without;