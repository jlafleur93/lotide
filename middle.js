// if elements <= 2 return an empty array
// odd number of elements return a single element
// even number return an array containing the
// middle elements should be returned
// check if length is even
// if length isnt even return single mid element;
// return results with round function
// 
//
const middle = function(arr) {
  let returnArr = [];
  const mid = Math.floor(arr.length / 2);
  if (arr.length <= 2 && arr.length > 0) {
    return returnArr;
  } else if (arr.length % 2 === 0) {
    return returnArr = [arr[mid - 1], arr[mid]];    
  }
  //adding the brackets adds the brackets in console.log
  // makes arr = arr[mid]
  //so if [1, 2, 3]
  //mid would become index 1 or 2 in this case
  //
  return returnArr = [arr[mid]];
};
//
console.log(middle([1, 2]));
console.log(middle([1, 2, 3, 4, 5, 6]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3]))

