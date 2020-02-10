const assertEqual = require('./assertEqual')
function eqArrays(arr1,arr2){
 for(let val of arr1){
   
   if(arr1[val] === arr2[val]){
     return val
   }
 }
}
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);// => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "4", "3"]), true) // => true
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

module.exports = eqArrays;