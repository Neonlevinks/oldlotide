const eqArrays = (results, test) => results === test ? true : false; 

const assertEqual = (results, test) => eqArrays(results, test) ? console.log("✅✅✅ Assertion Passed, both objects are equal") : console.log("🛑🛑🛑 Assertion Failed, the objects are not equal");

const countOnly = (allItems, itemsToCount) => {
  results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
      results[item] += 1;
      } else {
      results[item] = 1;
      }
    }
  }
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly;