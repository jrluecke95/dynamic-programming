function bestSum(target, arr) {
  let finalArr = null
  if (target === 0) return [];
  if (target < 0) return null;

  for (let num of arr) {
    let remainder = target - num;
    const remainderResult = bestSum(remainder, arr);
    if (remainderResult !== null) {
      let returnArr = [...remainderResult, num];
      if (finalArr === null || returnArr.length < finalArr.length) {
        finalArr = returnArr;
      }
    }
    
  }
  return finalArr;
}

console.log(bestSum(7, [5, 3, 4, 7]))
console.log(bestSum(8, [2, 3, 5]))
console.log(bestSum(8, [1, 4, 5]))

function bestSumMemo(target, arr, memo={}) {
  if (target in memo) return memo[target];
  let finalArr = null;
  if (target === 0) return [];
  if (target < 0) return null;

  for (let num of arr) {
    let remainder = target - num;
    const remainderResult = bestSumMemo(remainder, arr, memo);
    if (remainderResult !== null) {
      let returnArr = [...remainderResult, num];
      memo[target] = returnArr;
      if (finalArr === null || returnArr.length < finalArr.length) {
        finalArr = returnArr;
      }
    }
  }
  return finalArr;
}

console.log(bestSumMemo(7, [5, 3, 4, 7]))
console.log(bestSumMemo(8, [2, 3, 5]))
console.log(bestSumMemo(8, [1, 4, 5]))
console.log(bestSumMemo(100, [1, 2, 5, 25]))