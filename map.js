const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

function eqArrays(arr1,arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`🛑🛑🛑 Arrays Not Equal: ${arr1} === ${arr2}`);
      return false;
    }
    console.log(`✅✅✅ Arrays Equal: ${arr1} === ${arr2}`);
    return true;
  }
}



const map = function(array, callback){
  const results = [];
  for(let item of array){
    results.push(callback(item))
  }
  return results;
}
const words = ["ground", "control", "to", "major", "tom"];
const matching0 = ["game", "conquor", "time", "mayham", "tim"]
const results1 = map(words, word => word[0]);
const results2 = map(matching0, match => match[0] )
console.log(results1);

console.log(assertEqual(eqArrays(results1, results2)));