function climbStairs (steps, memo = {}) {
  if (steps < 2) return 1;
  if (!memo[steps]) memo[steps] = climbStairs(steps-1, memo) + climbStairs(steps-2,memo);
  return memo[steps];
}

console.log(climbStairs(1));
console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(10));
console.log(climbStairs(100));
console.log(climbStairs(147));
console.log(climbStairs(1000));