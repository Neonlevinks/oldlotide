const eqArrays = (array1, array2) => array1.join() === array2.join() ? true : false; //ternary, if the string containing all the values in array1 matches the string containing all the values in array2, this function will return the boolean true

const assertEqual = (actual, expected) => eqArrays(actual, expected) ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed, ${actual} !== ${expected}`);

const findKey = (object, callback) => {
  const results = [];
  for (const key in object) {
    callback(object[key]) ? results.push(key) : undefined;
  }
  return results;
};

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), ['noma','Ora']);

