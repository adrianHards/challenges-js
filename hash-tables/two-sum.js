// link to problem: https://leetcode.com/problems/two-sum/

// Given an array of integers (nums) and an integer (target)
// return the indices of the two numbers that add up to target
// test case one: nums = [2,7,11,15], target = 9, output: [0,1]
// test case two: nums = [11,5,5,15], target = 10, output: [1,2]
// each input is assumed to have exactly one solution

// first attempt, no hash table
var twoSum = function(nums, target) {
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
