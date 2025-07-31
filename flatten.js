const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) 
    return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) 
      return false;
  }
  return (true);
};

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log (`✅✅Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log (`❌❌Assertion Failed: ${arr1} !== ${arr2}`);
}
}

const flatten = function (arr) {
  let flat = arr;
  while (flat.some(Array.isArray)) {
    const temp = [];
    for (let i = 0; i < flat.length; i++) {
      if (Array.isArray(flat[i])) {
        temp.push(...flat[i]);
      } else {
        temp.push(flat[i]);
      }
    }
    flat = temp;
  }
  return flat;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]