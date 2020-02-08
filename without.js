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

function without(source, itemsToRemove) {
  let newArr = [];
 for(var i = 0; i < source.length; i++){
   if(source[i] !== itemsToRemove[i]){
     newArr.push(source[i])
   }
 
 }
 return newArr
}
    
const words = ["hello", "world", "lighthouse"];
console.log(without(["hello", "world", "lighthouse"], ["lighthouse"])); // 
console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
