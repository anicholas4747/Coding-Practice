function root(x, n) {
  // your code goes here
  let start = 0;
  let end = x;
  let midPoint = (start + x) / 2;

  while (start < end) {
    if (toThe(midPoint, n) === x) {
      return midPoint;
    } else if (toThe(midPoint, n) > x) {
      end = midPoint - 0.001;
    } else {
      start = midPoint + 0.001;
    }
    //
    midPoint = (start + end) / 2;
  }
  return midPoint; //0.001 => 1.913
}

//Time: O(Log(X))
//Space: O(1)

console.log(root(7, 3))
console.log(root(4, 2))

function toThe(base, exp) {
  if (exp === 0) return 1; //Covering an edgecase 
  let res = 1;
  while (exp > 0) {
    res *= base;
    exp--;
  }
  return res;
}

// [0.........100]
// Intial Search: 50 
// [0...49.999]
// Next Search: 25

// Up
// Piv
// Low

// Binary Search

// x => root(x,n) > 0
//

// root(x,n) => x
// root(x,n) => Approaching 0

//x >= 0
// root >= 1

//root(9,2) => 3 => 2.999

//Input x=7, n=3
//n = root
//x = number
//Cubed root of (7)

//Input x =4, n=2
//Square root of (4)


//N root of (X)
//Can't use Math.pow, can't use Math.sqrt