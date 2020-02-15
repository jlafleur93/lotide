const eqObjects = require(`./eqObjects`);
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: "${inspect(actual)}" === "${inspect(expected)}"`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: "${inspect(actual)}" !== "${inspect(expected)}"`);

  }

};
console.log(assertObjectsEqual({a:'1', b: '2'}, {a: '1', b: '2'}))
//YEAH IM FINALLY DONE WEEK 1 WORK 

module.exports = assertObjectsEqual;