function dropWhile(arr, pred) {
  ans = new Array
  arr.flat(Infinity).forEach(el => {
    if (pred(el)) {
      ans.push(el)
    }
  })
  return ans
}

function dropWhile(arr, pred) {
  while (arr.length && pred(arr[0])) arr.shift()
  return arr
}
