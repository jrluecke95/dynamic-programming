function howSum(target, arr) {
  if (target === 0) return [];
  if (target < 0) return null;
  for (let num of arr) {
    let remainder = target - num
    const remainderResult = howSum(remainder, arr);
    if (remainderResult !== null) {
      return [...remainderResult, num]
    }
  }
  return null
}

console.log(howSum(7, [2, 3]))
console.log(howSum(7, [5, 3, 4, 7]))
console.log(howSum(7, [2, 4]))
console.log(howSum(8, [2, 3, 5]))

function howSumMemo(target, arr, memo={}) {
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;
  for (let num of arr) {
    let remainder = target - num;
    const remainderResult = howSumMemo(remainder, arr, memo);
    if (remainderResult !== null) {
      memo[target] = [...remainderResult, num];
      return memo[target]
    }
  }
  memo[target] = null;
  return memo[target]
}

console.log(howSumMemo(7, [2, 3]))
console.log(howSumMemo(7, [5, 3, 4, 7]))
console.log(howSumMemo(7, [2, 4]))
console.log(howSumMemo(8, [2, 3, 5]))
console.log(howSumMemo(300, [7, 14]))