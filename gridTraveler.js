function gridTraveler(n1, n2) {
  if (n1 === 1 && n2 === 1) {
    return 1;
  } else if (n1 === 0 || n2 === 0) {
    return 0;
  }
  return gridTraveler(n1 - 1, n2) + gridTraveler(n1, n2 - 1);
}

console.log(gridMemo(1, 1))
console.log(gridMemo(2, 3))
console.log(gridMemo(3, 2))
console.log(gridMemo(3, 3))
console.log(gridMemo(18, 18))

function gridMemo(n1, n2, memo={}) {
  let key = n1 + ',' + n2;
  if (key in memo) {
    return memo[key]
  }
  if (n1 === 1 && n2 === 1) {
    return 1;
  }
  if (n1 === 0 || n2 === 0) {
    return 0;
  }
  memo[key] = gridMemo(n1 - 1, n2, memo) + gridMemo(n1, n2 - 1, memo);
  return memo[key];
  
}