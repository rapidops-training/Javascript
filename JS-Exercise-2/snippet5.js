const array_a = [0, 1, 2, 3];
const array_b = [3, 4, 5];

const findUnion = (arraya, arrayb) => {
  let unionArray = [...arraya, ...arrayb];
  let arrayMap = new Map();
  for (i = 0; i < unionArray.length; i++) {
    if (!arrayMap.has(unionArray[i])) {
      arrayMap.set(unionArray[i]);
    } else {
      unionArray.splice(i, 1);
    }
  }
  return unionArray;
};

const findDifference = (arraya, arrayb) => {
  let array1 = [...arraya];
  let array2 = [...arrayb];
  for (let i = 0; i < array2.length; i++) {
    if (array1.indexOf(array2[i]) !== -1) {
      array1.splice(array1.indexOf(array2[i]), 1);
    }
  }
  return array1;
};

const findIntersection = (arraya, arrayb) => {
  let array1 = [...arraya];
  let array2 = [...arrayb];
  if (array1.length > array2.length) {
    for (let i = 0; i < array2.length; i++) {
      if (array2.indexOf(array1[i]) === -1) {
        array1.splice(array1.indexOf(i), 1);
      }
    }
    return array1;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1.indexOf(array2[i]) === -1) {
        array2.splice(array2.indexOf(i), 1);
      }
    }
    return array2;
  }
};

console.log(
  `union_array:${findUnion(array_a, array_b)}, a-b_array=${findDifference(
    array_a,
    array_b
  )}, b-a_array = ${findDifference(
    array_b,
    array_a
  )}, intersection_array = ${findIntersection(array_b, array_a)}`
);
