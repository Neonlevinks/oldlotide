const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

without = (originArray, removalArray) => {
  let resultArray = [];
  for (let i = 0; i < originArray.length; i++) {
    let findMatch = false;
    for (let j = 0; j < removalArray.length; j++){
        if (removalArray[j] === originArray[i]) {
          findMatch = true;
        }
      
    }
    if (!findMatch) {
      resultArray.push(originArray[i])
    }
  }
  console.log(resultArray);
};

without([1, 2, 3], [1, 2]); // => [2, 3]
//without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
