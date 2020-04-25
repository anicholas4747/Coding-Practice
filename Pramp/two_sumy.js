let newArr = [];
let hash = {};

arr.forEach(ele => {
  hash[ele - k] = ele;
});

arr.forEach(ele => {
  if (hash[ele] !== undefined) newArr.push([hash[ele], ele]);
});

return newArr;
}

// findPairsWithGivenDifference([0,-1,-2,2,1], 1)
// {
//  -1: 0,
//  -2: -1,
//  -3: -2,
//   1: 2,
//   0: 1
// }

//  [
//    [0,-1],
//    [-1,-2],
//    [2,1],
//  ]