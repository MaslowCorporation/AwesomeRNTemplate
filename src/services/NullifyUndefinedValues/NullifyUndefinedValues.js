export function NullifyUndefinedValues(obj) {
  // Base case: if obj is not an object, return obj
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  if (Object.isFrozen(obj)) {
    console.log("let's unfreeze the input object");

    obj = { ...obj }
  }

  // Recursive case: loop through obj and nullify all undefined values
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (obj[key] === undefined) {
        obj[key] = null;
      } else if (typeof obj[key] === 'object') {
        if (Array.isArray(obj[key])) {
          obj[key] = obj[key].map(item => (item === undefined ? null : item));
        } else {
          obj[key] = NullifyUndefinedValues(obj[key]);
        }
      }
    }
  }

  return obj;
}

