// Given a number
// How many numbers divisible by 4 ^ x 

function divByPowerOfFour (num) {
  let div = 1;
  let arr = [];

  while (div <= num) {
    if ((num & (div-1)) === 0) arr.push(div); // same as num % div === 0, but faster bc bitwise
    div *= 4;
  }

  return arr;
}

console.log(divByPowerOfFour(0));
console.log(divByPowerOfFour(1));
console.log(divByPowerOfFour(4));
console.log(divByPowerOfFour(80));
console.log(divByPowerOfFour(124));
console.log(divByPowerOfFour(128));