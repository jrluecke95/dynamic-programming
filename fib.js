function fib(num) {
  if (num <= 2) return 1;

  return fib(num - 1) + fib(num - 2);
}
// memoized
function memoFib(num, memo={}) {
  if (num in memo) {
    return memo[num];
  }
  if (num <= 2) {
    return 1;
  }
  memo[num] = memoFib(num - 1, memo) + memoFib(num - 2, memo);
  return memo[num]
}

console.log(fib(5))
console.log(memoFib(50))