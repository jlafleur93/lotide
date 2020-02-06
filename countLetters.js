const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(letters){
  let arr = {};
  for(let char of letters){
    arr[char] = arr[char] + 1  || 1
  }
  return arr;
}

console.log(countLetters("lighthouse in the house"));
console.log(countLetters("LHL"));
console.log(countLetters("asswewdsadas"));
