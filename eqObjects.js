const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  // console.log(`check if keys.length is same in if statement before loop`, keys1, keys2)
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    console.log(`test obj key`,object1[key]);
    if (Array.isArray(object1[key]) === Array.isArray(object2[key])) {
      return  true;

    }
    return false;
    // console.log(`value comparison`,object1[key] === object2[key]);
    /* console.log(`object1 key :`, key, `object2 value:`, object2[key], `assigned to the value`, object1[key]);
   console.log(`keys1.length`, keys1.length, `keys 2.length`, keys2.length, `check if same length`, keys1.length === keys2.length) */
  }
};
// I have to use better names it was too hard to compare to make sure for future reference
const equalKeyValue1 = {a:"1", b: "2}"};
const equalKeyValue2 = {a:"1", b: "2}"};
const diffOrderKeyValue = {a:"2", b: "1"};
const eqObjArrayEqual1 = { c: "1", d: ["2", 3] };
const eqObjArrayEqual2 = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
console.log((eqObjects(eqObjArrayEqual1, eqObjArrayEqual2))); // => true
console.log((eqObjects(eqObjArrayEqual1, cd2)));
/* console.log((eqObjects(equalKeyValue1, equalKeyValue2)));
console.log((eqObjects(equalKeyValue1, equalKeyValue2))); */
// => false
/* console.log(`unequal values meant to fail 1: `,eqObjects(ab, ba));
console.log(`unequal values meant to fail 2`, eqObjects(equalKeyValue2, abc));
console.log(`equal values`, (eqObjects(equalKeyValue1,equalKeyValue2)));
console.log(`different ordered values:`,eqObjects(equalKeyValue2, diffOrderKeyValue)) */