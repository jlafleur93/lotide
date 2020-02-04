const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(x){
  arr = [];
  for(var i = 1; i < x.length; i++){
    console.log(x[i]);
    arr.push(x[i])
  }
  return arr;
}
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
assertEqual(words.length,2);
assertEqual(words[0], "Lighthouse");
assertEqual(words[1], "Labs");
const newWords = ["same"];
tail(newWords);