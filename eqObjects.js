const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = (object1, object2) => {
  let object1Key = Object.getOwnPropertyNames(object1)
  let object2Key = Object.getOwnPropertyNames(object2);

  if (object1Key.length !== object2Key.length) {
    return false;
  } 
  for (let i = 0; i < object1Key.length; i++) {
    let keyName = object1Key[i];
    if (object1[keyName] !== object2[keyName]) {
      return false;
    }
  }

  return true;

};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual((eqObjects(ab, ba)), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

module.exports = eqObjects;