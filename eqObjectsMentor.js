function eqObjects(objA, objB, isSequentialCall) {
  const errorMessage = "please provide valid JS object or array for the first 2 arguments";  if ((objA === null || objA === NaN || objA === undefined
    || objB === null || objB === NaN || objB === undefined)) {
    throw new Error(errorMessage);
  }  const objAType = objA.constructor.name;
  const objBType = objB.constructor.name;  const areBothObjsCompoundType = (objAType === "Array" || objAType === "Object")
    && (objBType === "Array" || objBType === "Object");  if (!isSequentialCall && !areBothObjsCompoundType) {
    throw new Error(errorMessage);
  }   if (areBothObjsCompoundType) {
    // when 1 arg is array and 1 arg is object
    if (objAType !== objBType) {
      return false;
    // when both args are arrays
    } else if (objAType === "Array") {
      if (objA.length !== objB.length) {
        return false;
      }
      if (objA.length === 0) {
        return true;
      }
      for (let i = 0; i < objA.length; i++) {
        if (!eqObjects(objA[i], objB[i], true)) {
          return false;
        }
      }
    // when both args are objects
    } else {
      if (Object.keys(objA).length !== Object.keys(objB).length) {
        return false;
      }
      if (Object.keys(objA).length === 0) {
        return true;
      }
      for (let key in objA) {
        if (!eqObjects(objA[key], objB[key], true)) {
          return false;
        }
      }   
    }
  } else {
    // when 1 or both args are primitive types e.g. num, string, bool
    return objA === objB;
  }
  return true;
}