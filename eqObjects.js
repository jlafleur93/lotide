const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  let objKeys1 = Object.keys(object1);
  let objKeys2 = Object.keys(object2);
  if (objKeys1.length === objKeys2.length) {
    for (let key of objKeys1) {
      if (object1[key] !== object2[key]) {
        if (Array.isArray(object1[key] === true && Array.isArray(object2[key]) === true))
          return eqArrays(object1[key], object2[key]);
      } else {
        (object1[key] === object2[key]);
        return true;
      }
    }
  }
};

module.exports = eqObjects;
