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
    console.log(`✅✅✅ Arrays Equal: ${arr1} !== ${arr2}`);
    return true;
  }
}
eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
eqArrays([2, 4, 5], [5, 2, 4]);
eqArrays(["2", 4, "5"], [2, "4", 5])
