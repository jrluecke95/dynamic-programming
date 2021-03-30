
function canSum(target, arr) {
  if (target === 0) return true;
  if (target < 0) return false;
  for (let num of arr) {
    let remainder = target - num;
    if (canSum(remainder, arr)) {
      return true
    }
  }
  return false
}

console.log(canSum(7, [2, 3]))
console.log(canSum(7, [2, 4]))

function canSumMemo(target, arr, memo={}) {
  if (target in memo) return memo[target];
  if (target === 0) return true;
  if (target < 0) return false;
  for (let num of arr) {
    let remainder = target - num;
    if (canSumMemo(remainder, arr, memo)) {
      memo[target] = true;
      return true
    }
  }
  memo[target] = false
  return false
}

console.log(canSumMemo(7, [2, 3]))
console.log(canSumMemo(7, [2, 4]))
console.log(canSumMemo(300, [7, 14]))