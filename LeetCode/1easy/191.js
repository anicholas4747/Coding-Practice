var hammingWeight = function (n) {
  let numStr = `${n}`;
  let count = 0;
  for (let i = 0; i < numStr.length; i++) {
    if (numStr[i] === "1") count++;
  }
  return count;
};

console.log(hammingWeight(1011));