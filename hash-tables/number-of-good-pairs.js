// hash-map
function numIdenticalPairs(nums) {
  // create an empty hash map
  let hashMap = new Map()
  // let number of pairs start at 0
  let pairs = 0
  // for...of refers to the value whereas for ...in refers to the index
  for (num of nums) {
    // if the hash map does not contain the number
    if (!hashMap.has(num)) {
      // create key value pair of number and count of 1
      hashMap.set(num, 1)
    } else {
      // else update pairs to equal current value + value of current number count
      pairs = pairs + (hashMap.get(num))
      // add number as key and value as previous value + 1 for each time it occurs
      hashMap.set(num, (hashMap.get(num) + 1))
    }
  }
  // finally, return number of pairs
  return pairs
}

// example:
// [1,1,2]
// hashMap: {} > {1 => 1} > {1 => 2} > {1 => 2, 2 => 1}
// pairs: 0 > 1 > 2 > 2

// initial solution:
function numIdenticalPairs(nums) {
  const obj = {...nums}
  let ans = 0
  for (i in obj) {
    for (j in obj) {
            if (i !== j && obj[i] === obj[j]) {
                ans += 1
            }

    }
  }
  return (ans/2)
};
