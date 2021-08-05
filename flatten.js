const flatten = (allItems) => {
  let resultArray = [];
  for (let item of allItems) {
    if (Array.isArray(item)) {
      let nestedArray = item;
      for (let number of nestedArray) {
        resultArray.push(number);
      }
    } else {
      resultArray.push(item);
    }
  }
  return resultArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]
;
