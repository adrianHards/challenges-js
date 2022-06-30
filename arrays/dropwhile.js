// link to problem: https://www.codewars.com/kata/54f9c37106098647f400080a/train/javascript

// initial solution from not understand the challenge ...
function dropWhile(arr, pred) {
  ans = new Array
  // flatten nested arrays however many times necessary
  arr.flat(Infinity).forEach(el => {
    // if the outcome of calling the predicate function on the element is true
    if (pred(el)) {
      // add element to the ans array
      ans.push(el)
    }
  })
  return ans
}

function dropWhile(arr, pred) {
  // for the length of the array AND while the result of calling the predicate function on the first element of the array is true
  // remove first element from the array with .shift
  while (arr.length && pred(arr[0])) arr.shift()
  return arr
}

// e.g. seq = [2,4,6,8,1,2,5,4,3,2]
// becomes [1,2,5,4,3,2]
