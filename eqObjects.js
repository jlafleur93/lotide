function eqArrays(arr1,arr2){
  for(var i = 0; i < arr1.length; i++){
    if(arr1[i] !== arr2[i]){
    return false;
  }
  return true;
  }
}


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const eqObjects = function(object1, object2) {
 var keys1 = Object.keys(object1)
 var keys2 = Object.keys(object2)
 // console.log(`check if keys.length is same in if statement before loop`, keys1, keys2)
 if(keys1.length !== keys2.length){
   return false
 }
 for(key of keys1){
   return true
   /* console.log(`object1 key :`, key, `object2 value:`, object2[key], `assigned to the value`, object1[key]);
   console.log(`keys1.length`, keys1.length, `keys 2.length`, keys2.length, `check if same length`, keys1.length === keys2.length) */
   }
}
 // I have to use better names it was too hard to compare to make sure for future reference
const ab = { a: "1", b: "2", c:"5"};
const ba = { b: "3", a: "2"};
const equalKeyValue1 = {a:"1", b: "2}"};
const equalKeyValue2 = {a:"1", b: "2}"};
const abc = {a: "1", b: "3", c: "3"};
const diffOrderbb = {a:"2", b: "1"};
console.log(`unequal values meant to fail 1: `,eqObjects(ab, ba));
console.log(`equal values`, (eqObjects(equalKeyValue1,equalKeyValue2)));
console.log(`unequal values meant to fail 2`, eqObjects(equalKeyValue2, abc));
console.log(`different ordered values:`,eqObjects(equalKeyValue2, diffOrderbb))