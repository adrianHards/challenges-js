function smallerNumbersThanCurrent(nums) {
  // create an object with num as value and index as key
  let hash = {...nums}
  // create an empty array and fill it with 0s for length of nums array
  const arr = new Array(nums.length).fill(0);

  // iterate over the object hash
  for (let [key, value] of Object.entries(hash)) {
    // iterate over the nums array
    for (const num of nums) {
      // if the value for a key is greater than the num
      if (value > num)
        // assign the value at index key in the answer array to equal existing value + 1
        arr[parseInt(key)] = arr[parseInt(key)] + 1
    }
  }
  // return the answers array
  return arr
};

// invalid hashMap solution:
function smallerNumbersThanCurrent(nums) {
  // create an empty hashmap and answer array
  const hashMap = new Map()
  const arr = []

  // for each number in the nums array set key to num and value to 0
  for (const num of nums) {
      hashMap.set(num, 0)
  }

  // iterate over key value pairs in hashmap
  for (const [key, value] of hashMap) {
    // inside that loop iterate over nums array
    for (const num of nums) {
      // if the key is greater than num
      if (key > num) {
        // set the key to key and the value to the existing value + 1
        hashMap.set(key, (hashMap.get(key) + 1))
      }
    }
    // add the values to the empty array
    arr.push(hashMap.get(key))
  }
  // return the arr
  return arr
};

// why this doesn't work? .set overwrites keys that are the same
// e.g. [8,1,2,2,3] will return [4,0,1,3] not [4,0,1,1,3]
