// link to problem: https://leetcode.com/problems/two-sum/

// Given an array of integers (nums) and an integer (target)
// return the indices of the two numbers that add up to target
// test case one: nums = [2,7,11,15], target = 9, output: [0,1]
// test case two: nums = [11,5,5,15], target = 10, output: [1,2]
// each input is assumed to have exactly one solution

// first attempt, no hash map
function twoSum(nums, target) {
  // iterate by 1 over the array, starting at index 0, until index is equal to length of the array
  for (let i = 0; i < nums.length; i++) {
    // use a nested loop to sum the next integer in the array
    // for test case one, y = 1 works, but if used with test case two, the output will be [1,1] which is incorrect
    for (let y = i+1; y < nums.length; y++) {
      // access values from the array using index to see if sum matches target
      if (nums[i] + nums[y] === target) {
        // exit loop and return indices
        return [i,y]
      }
    }
  }
};

// second attempt, using a hash map
function twoSum(nums, target) {
  // create an empty hash
  const map = new Map()
  // loop over the nums array
  for (let i=0; i<nums.length; i++) {
    // 1. .set adds or updates an element with a specified key and value to the hash
    // 2. where the key is the result of target - the integer in the num array at index i
    // 3. and the value is index i
    map.set(target - nums[i], i)
    // console.log(map)
    // so if a number comes up more than once, the value will be the last index
  }

  for (let i=0; i<nums.length; i++) {
    // 1. .has returns boolean indicating whether an element with specified key exists
    // 2. .get returns specified element from a Map object
    if (map.has(nums[i]) && i !== map.get(nums[i])) {
        return [i, map.get(nums[i])]
    }
  }
};

// twoSum([5,2,3], 7)
// Map { 3 => 0 }
// Map { 3 => 0, 6 => 1 }
// Map { 3 => 0, 6 => 1, 5 => 2 }
// Map { 3 => 0, 6 => 1, 5 => 2 }
// [0, 2]

// index 0 from nums array = 5
// does the map have a key 5?
// yes it does, if so, what is it's value? the value is 2
// return index 0 and the value, 2

// twoSum([3,2,5], 7)
// Map { 5 => 0 }
// Map { 5 => 0, 6 => 1 }
// Map { 5 => 0, 6 => 1, 3 => 2 }
// Map { 5 => 0, 6 => 1, 3 => 2 }
// [0, 2]
