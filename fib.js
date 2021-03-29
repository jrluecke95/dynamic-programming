function fib(num) {
  if (num <= 1) return 1;

  return fib(num - 1) + fib(num - 2);
}
// memoized
function memoFib(num, memo={}) {
  if (num <= 1) {
    return 1;
  }
  if (memo[num]) {
    return memo[num];
  } else {
    return memoFib(num-1, memo) + memoFib(num-2, memo)
  }
}

console.log(fib(5))
console.log(memoFib(5))