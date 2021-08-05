eqArrays = (array1, array2) => array1.join() === array2.join() ? true : false; //ternary, if the string containing all the values in array1 matches the string containing all the values in array2, this function will return the boolean true 

assertArraysEqual = (array1, array2) => eqArrays(array1, array2) ? console.log("✅✅✅ Assertion Passed, both arrays are equal") : console.log("🛑🛑🛑 Assertion Failed, the arrays are not equal");

assertArraysEqual([1,2,3], [1,2,3]);
assertArraysEqual([1,2,3], [3,2,1]);