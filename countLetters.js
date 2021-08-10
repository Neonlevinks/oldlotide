const eqArrays = (results, test) => results === test ? true : false; 

const assertEqual = (results, test) => eqArrays(results, test) ? console.log("✅✅✅ Assertion Passed, both objects are equal") : console.log("🛑🛑🛑 Assertion Failed, the objects are not equal");

const countLetters = (inputString) => {
    results = {};
    
  
    for (const letter of inputString) {
      if (results[letter]) {
        results[letter] += 1;
      } else if (letter === " ") {

      } else {
        results[letter] = 1;
      }

    }
  return results;
};

console.log(countLetters("lighthouse in the house"));