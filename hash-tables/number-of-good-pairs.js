// hash-map
function numIdenticalPairs(nums) {
  let hashMap = new Map()
  let pairs = 0
  for (num of nums) {
    if (!hashMap.has(num)) {
      hashMap.set(num, 1)
    } else {
      pairs = pairs + (hashMap.get(num))
      hashMap.set(num, (hashMap.get(num) + 1))
    }
  }
  return pairs
}

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
